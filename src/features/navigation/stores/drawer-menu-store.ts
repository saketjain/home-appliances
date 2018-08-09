
import { action, observable } from "mobx";
import history from "../../../navigation-history";
import {menu} from './drawer-menu-item';

export class DrawerMenuStore {

    @observable
    private open: boolean = false;
    
    @observable
    private menuStateMap: Map<number, boolean> = new Map<number, boolean>();

    @action
    public onClose = () => {
        this.setOpen(false);
    }

    @action
    public onOpen = () => {
        this.setOpen(true);
    }

    @action
    public handleClick = (key: number) => {
        if (!this.menuStateMap.get(key)) {
            this.menuStateMap.set(key, true);
        } else {
            this.menuStateMap.set(key, !this.menuStateMap.get(key));
        }
    }

    public isExpanded = (key: number) => {
        return this.menuStateMap.get(key);
    }

    public onMenuSelection = (path: string) => {
        history.push(path);
        this.onClose();
    }

    public isOpen = () => {
        return this.open;
    }

    public setOpen = (open: boolean) => {
        this.open = open;
    }

    public getMenu() {
        return menu;
    }
    
}

export const drawerMenuStore = new DrawerMenuStore();