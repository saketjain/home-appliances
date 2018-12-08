import { Schedule } from "./schedule";


export class SceneSchedule {
    
    public sun: Schedule;
    public moon: Schedule;
    public stars: Schedule;
    public sky: Schedule;
    public clouds: Schedule;
    public ground: Schedule;
    public night: Schedule;
    
    constructor(public start: number, public duration: number, public paused: boolean){
        
    }
}