import { action, observable } from "mobx";


export interface IMessage {
    timeStamp: number;
    load: number;
}
export class ConsumptionStore {

    @observable
    public data: number[][] = [];

    @action
    public updateLiveData(message: IMessage) {
        
        const newData = this.data.slice(0); // Clone

        // tslint:disable-next-line:no-console
        console.log(new Date(message.timeStamp), message.load);
        newData.push([this.convertUTCDateToLocalDate(message.timeStamp), message.load]);
        this.data = newData;
    }

    @action
    public clearData() {
        this.data = [];
    }

    private convertUTCDateToLocalDate(longDate: number) {
        // const newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
        const newDate = new Date(longDate);
        newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset())
        return newDate.getTime();
    }

}

export const consumptionStore = new ConsumptionStore();