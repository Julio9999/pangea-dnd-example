import { DragDropContext } from "@hello-pangea/dnd";
import { KanbanColumn } from "./kanban-column";
import { kanbanData } from "../../../data/kanban";
import { useState } from "react";

export const KanbanContainer = () => {
  const [kanbanItems, setKanbanItems] = useState(kanbanData);

  const onDrop = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = kanbanItems.find(
      (column) => column.columnId === source.droppableId
    );
    const destinationColumn = kanbanItems.find(
      (column) => column.columnId === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    const sourceItems = [...sourceColumn.items];
    const destinationItems = [...destinationColumn.items];

    const [movedItem] = sourceItems.splice(source.index, 1);
    destinationItems.splice(destination.index, 0, movedItem);

    const newKanbanData = kanbanItems.map((column) => {
      if (column.columnId === source.droppableId) {
        return { ...column, items: sourceItems };
      } else if (column.columnId === destination.droppableId) {
        return { ...column, items: destinationItems };
      } else {
        return column;
      }
    });

    setKanbanItems(newKanbanData);
  };

  return (
    <DragDropContext onDragEnd={onDrop}>
      <div className="flex p-8 border-red-500 border-2 items-center justify-center gap-4">
        {kanbanItems.map((item) => (
          <KanbanColumn
            columnId={item.columnId}
            items={item.items}
            key={item.columnId}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
