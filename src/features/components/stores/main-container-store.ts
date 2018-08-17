import { action, computed, observable } from "mobx";
import * as Moment from "moment";

export class MainContainerStore {
        public clockSteps = ['1hr = 1hr', '1min = 1hr', '30sec = 1hr','15sec = 1hr', '1sec = 1hr'];
        @observable private sunlight: number = 35;
        @observable private houseCount: number = 1;
        @observable private currentClockRate: number = 0;
        @observable private startHour: number = 0;
        @observable private currentTimeStamp:any;
        @observable private valueIncrementAt:number = 1;
        @observable private clockTime: any;
        @observable private incrementValue: any;
        @observable private timerPaused: boolean = false;

        @computed get CurrentClockRateAlias(){ return this.clockSteps[this.currentClockRate]; }

        @action public handleSunlightChange = (event: any, value: number) => {
            this.sunlight = value;
        };

        @action public handleHouseCountChange = (event: any, value: number) => {
            this.houseCount = value;
        };
        
        @action public handleClockRateChange = (event: any, value: number) => {
            this.currentClockRate = value;
            this.clockResetForModification();
        };

        @action public handleClockChange = (event: any, value: number) => {
            this.houseCount = value;
        };

        @action public handleStartHourChange = (event: any, value: number) => {
            this.startHour = value;
            this.clockResetForModification();
        }

        public clockResetForModification = () => {
            if (this.currentTimeStamp) {
                this.handleStopClick(false);
                this.handlePlayClick();
            }
        }

        @action public handlePlayClick = () => {
            if (!this.timerPaused){
                this.currentTimeStamp = Moment(this.startHour, "HH");
            }
            this.getIncrementInterval();
            
            this.clockTime = setInterval(() => {
                if (this.startHour < 24) {
                    this.handleClockUsingClockRate();
                }else{
                    this.handleStopClick();
                }
            }, 1000)
            
            this.incrementValue = setInterval(() => {
                if(this.startHour < 24){
                    this.startHour = this.startHour + 1;
                }else{
                    this.handleStopClick();
                }
            }, this.valueIncrementAt * 1000)
            
        }
        
        public handleClockUsingClockRate = () => {
            switch(this.currentClockRate) {
                case 0:
                    this.currentTimeStamp = Moment(this.currentTimeStamp).add(1, "s");
                    break;
                case 1:
                    this.currentTimeStamp = Moment(this.currentTimeStamp).add(1, "m");
                    break;
                case 2:
                    this.currentTimeStamp = Moment(this.currentTimeStamp).add(2, "m");
                    break;
                case 3:
                    this.currentTimeStamp = Moment(this.currentTimeStamp).add(4, "m");
                    break;
                case 4:
                    this.currentTimeStamp = Moment(this.currentTimeStamp).add(1, "h");
                    break;
                default:
                    this.currentTimeStamp = Moment(this.currentTimeStamp).add(1, "s");
                    break;
            };
        }

        // This will increment the timer silder
        public getIncrementInterval(){
            switch (this.currentClockRate) {
                case 0:
                    this.valueIncrementAt = 60 * 60;
                    break;
                case 1:
                    this.valueIncrementAt = 60;
                    break;
                case 2:
                    this.valueIncrementAt = 30;
                    break;
                case 3:
                    this.valueIncrementAt = 15;
                    break;
                case 4:
                    this.valueIncrementAt = 1;
                    break;
                default:
                    this.valueIncrementAt = 1;
                    break;
            };
        }

        @action public handlePauseClick = () => {
            clearInterval(this.clockTime);
            clearInterval(this.incrementValue);
            this.timerPaused = true;
        }

        @action public handleStopClick = (restart = true) => {
            clearInterval(this.clockTime);
            clearInterval(this.incrementValue);
            this.currentTimeStamp = null;
            if(restart){ this.startHour = 0; this.timerPaused = false; }
        }

       }

export const mainContainerStore = new MainContainerStore();