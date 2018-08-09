import { CONTEXT } from '../../../constants';
import history from '../../../navigation-history';
import {portfolioContextMenu, stockContextMenu} from './context-menu-item';

export interface IContextMenuItem {
    label: string;
    path: string;
}

export class ContextMenuStore {

    public getContextMenu() {
        const currentPath = history.location.pathname;
        if(currentPath.startsWith(CONTEXT + '/portfolio')) {
            return portfolioContextMenu;
        } else {
            return stockContextMenu;
        }
    }

    public onMenuSelection = (path: string) => {
        history.push(path);
    }
}

export const contextMenuStore = new ContextMenuStore();