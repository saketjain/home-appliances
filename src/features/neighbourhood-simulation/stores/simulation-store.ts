import { action, observable } from "mobx";
import { simulationService } from "../services/simulation-service";

export class SimulationStore {


    @observable public clockRateSlider: number = 0;
    @observable public clockSlider: number = 0;
    @observable public sunlightSlider: number = 35;
    @observable public numberOfHouses: number = 1;
    @observable public clockRate: number = 0;
    @observable public currentTimeStamp: Date;

    private startOfDay: any
    private clockSteps = [1, 60, 300, 900, 1800, 3600, 7200];
    private clockIntervals: number = 0;
    private currentTimeStampInterval: any;

    constructor() {
        this.startOfDay = new Date();
        this.startOfDay.setHours(0, 0, 0, 0);
        this.currentTimeStamp = this.startOfDay;
    }

    @action public handleSunlightChange = (event: any, value: number) => {
        this.sunlightSlider = value;
    };

    @action public handleHouseCountChange = (event: any, value: number) => {
        this.numberOfHouses = value;
    };

    @action public adjustClockRate = (event: any, clockRateSlider: number) => {
        this.clockRateSlider = clockRateSlider;
        const index = Math.round((clockRateSlider / 100) * this.clockSteps.length);
        this.clockRate = this.clockSteps[index];
        this.clockIntervals = (24 * 3600) / this.clockRate;     
    }

    @action public adjustClock = (event: any, clockSlider: number) => {
        this.clockSlider = clockSlider;
        const clockSliderPosition = Math.round((clockSlider / 100) * this.clockIntervals);        
        const startTimeinSeconds =  clockSliderPosition * this.clockRate;
        const now = new Date();
        now.setHours(0,0,0,0);
        this.currentTimeStamp = new Date(now.getTime() +  (startTimeinSeconds * 1000)); 
    }


    @action public handlePlayClick = () => {
        this.currentTimeStampInterval = setInterval(this.resumeClock, 1000);
        this.startSimulation();
    }

    @action public handlePauseClick = () => {
        clearInterval(this.currentTimeStampInterval);
    }

    @action public handleStopClick = () => {
        clearInterval(this.currentTimeStampInterval);
        this.currentTimeStamp = this.startOfDay;
        this.clockSlider = 0;
    }

    private startSimulation = () => {
        const simulationRequest = {
            clockRate: this.clockRate,
            currentTimeStamp: this.currentTimeStamp,
            id: '1',
            numberOfHouses: this.numberOfHouses,
            sunlight: 0,
        }
        simulationService.startSimulation(simulationRequest);
    }

    private resumeClock = () => {
        const newTimeStamp = this.currentTimeStamp.getTime() + (this.clockRate *  1000); 
        this.currentTimeStamp = new Date(newTimeStamp)
        const seconds = Math.round((this.currentTimeStamp.getTime() - this.startOfDay.getTime())/1000);
        this.clockSlider = (seconds / (24 * 3600)) * 100;
    }
}

export const simulationStore = new SimulationStore();