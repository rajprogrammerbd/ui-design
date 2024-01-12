import { IconType } from "react-icons";

export type LIST_OBJECT_TYPE = {
    id: number;
    name: string;
    component: React.LazyExoticComponent<() => JSX.Element>
}

export type AppStateProps = {
    selectedId: number;
    lists: LIST_OBJECT_TYPE[];
}

export type IOptions = {
    id: number;
    name: string;
    icon: IconType;
}

export type ISettingsList = {
    id: number;
    icon: IconType;
}

export type IDetailsList = {
    name: string;
    id: number;
    icon: IconType;
}

export type ISortCutList = {
    name: string;
    id: number;
    icon: IconType;
}

export type FacebookState = {
    selectionHeaderId: number;
    options: IOptions[];
    settingsList: ISettingsList[];
    detailsList: IDetailsList[];
    shortCutList: ISortCutList[];
}

export type ISidebarProps<T> = {
    hasTitle: false | { title: string };
    lists: T;
}