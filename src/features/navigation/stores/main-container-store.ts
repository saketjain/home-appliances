import { action, computed, observable } from "mobx";

export class MainContainerStore {
        public clockSteps = ['1hr = 1hr', '30min = 1hr', '1min = 1hr', '1sec = 1hr'];
        @observable private sunlight: number = 50;
        @observable private houseCount: number = 1;
        @observable private currentClockRate: number = 0;

        @computed get CurrentClockRateAlias(){ return this.clockSteps[this.currentClockRate]; }

        @action public handleSunlightChange = (event: any, value: number) => {
            this.sunlight = value;
        };

        @action public handleHouseCountChange = (event: any, value: number) => {
            this.houseCount = value;
        };
        
        @action public decreaseClockRate = (e :any) => {
            this.currentClockRate = this.currentClockRate - 1;
        }

        @action public increaseclockRate = (e: any) => {
            this.currentClockRate = this.currentClockRate + 1;
        }
        
       }

export const mainContainerStore = new MainContainerStore();