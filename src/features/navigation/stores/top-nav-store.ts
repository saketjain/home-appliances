import { action, observable } from "mobx";

export class TopNavStore {

    @observable
    private title: string;

    @observable
    private showBackButton: boolean = false;

    public getTitle() {
        return this.title;
    }

    public setTitle(title: string) {
        return this.title = title;
    }

    public isShowBackButton(){
        return this.showBackButton;
    }

    @action
    public setShowBackButton(showBackButton: boolean) {
        this.showBackButton = showBackButton;
    }
}

export const topNavStore = new TopNavStore();