export interface ILists {
    id: number;
    text: string;
    subtitle: string;
}

export interface IState {
    lists: ILists[];
}