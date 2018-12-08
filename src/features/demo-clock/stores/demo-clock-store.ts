import { action, observable } from "mobx";
import { IOnChange, IOnPause, IOnPlay, IOnStop } from "../components/demoClockComponent";

export class DemoClockStore {


    @observable public clockRateSlider: number = 0;
    @observable public clockSlider: number = 0;
    @observable public sunlightSlider: number = 35;
    @observable public numberOfHouses: number = 1;
    @observable public clockRate: number = 0;
    @observable public currentTimeStamp: Date;

    private startOfDay: Date;
    private clockSteps = [1, 60, 300, 900, 1800, 3600, 7200];
    private clockIntervals: number = 0;
    private currentTimeStampInterval: any;

    constructor() {
        this.startOfDay = new Date();
        this.startOfDay.setHours(0, 0, 0, 0);
        this.currentTimeStamp = this.startOfDay;
    }

    @action public adjustClockRate = (clockRateSlider: number, onChangeCallback: IOnChange) => {
        this.clockRateSlider = clockRateSlider;
        const index = Math.round((clockRateSlider / 100) * this.clockSteps.length);
        this.clockRate = this.clockSteps[index];
        this.clockIntervals = (24 * 3600) / this.clockRate;
        onChangeCallback(this.currentTimeStamp, this.clockRate); 
    }

    @action public adjustClock = (clockSlider: number, onChangeCallback: IOnChange) => {
        this.clockSlider = clockSlider;
        const clockSliderPosition = Math.round((clockSlider / 100) * this.clockIntervals);        
        const startTimeinSeconds =  clockSliderPosition * this.clockRate;
        const now = new Date();
        now.setHours(0,0,0,0);
        this.currentTimeStamp = new Date(now.getTime() +  (startTimeinSeconds * 1000)); 
        onChangeCallback(this.currentTimeStamp, this.clockRate);
    }


    @action public handlePlayClick = (playCallback: IOnPlay) => {
        this.currentTimeStampInterval = setInterval(this.resumeClock, 1000);
        playCallback(this.currentTimeStamp, this.clockRate);
    }

    @action public handlePauseClick = (pauseCallBack: IOnPause) => {
        clearInterval(this.currentTimeStampInterval);
        pauseCallBack(this.currentTimeStamp, this.clockRate);
    }

    @action public handleStopClick = (stopCallback: IOnStop) => {
        clearInterval(this.currentTimeStampInterval);
        this.currentTimeStamp = this.startOfDay;
        this.clockSlider = 0;
        stopCallback();
    }


    private resumeClock = () => {
        const newTimeStamp = this.currentTimeStamp.getTime() + (this.clockRate *  1000); 
        this.currentTimeStamp = new Date(newTimeStamp)
        const seconds = Math.round((this.currentTimeStamp.getTime() - this.startOfDay.getTime())/1000);
        this.clockSlider = (seconds / (24 * 3600)) * 100;
    }

}

export const demoClockStore = new DemoClockStore();