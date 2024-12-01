import { KanbanItem } from "./kanban-item"
import { Droppable } from '@hello-pangea/dnd';
import { IKanbanColumn } from "../interfaces/kanban/kanban.interface";



export const KanbanColumn = ({ columnId, items }: IKanbanColumn) => {
    return (
        <Droppable droppableId={columnId}>
            {(provided, snapshot) => (
                <div 
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                className="flex flex-col p-2 border-blue-500 border gap-4"
                
                >

                    {
                        items.map((item, index) => (
                            <KanbanItem key={item.id} title={item.title} id={item.id} index={index} />
                        ))
                    }
                    {provided.placeholder} 
                </div>
            )
            }
        </Droppable>
    )
}
