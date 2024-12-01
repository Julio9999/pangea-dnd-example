export interface IKanbanItem {
    id: string;
    title: string;
}

export interface IKanbanColumn {
    columnId: string;
    items: IKanbanItem[];
}