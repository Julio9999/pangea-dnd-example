import { Draggable } from '@hello-pangea/dnd';
import { IKanbanItem } from '../interfaces/kanban/kanban.interface';

interface Props extends IKanbanItem{
    index: number;
}

export const KanbanItem = ({title, id, index}: Props) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="border-green-500 border-2 cursor-pointer select-none"
                >
                    {title}
                </div>
         )}
        </Draggable>
    )
}
