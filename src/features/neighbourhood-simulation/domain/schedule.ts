

export class Schedule {
    constructor(public sceneStart: number, public sceneDuration: number, public paused: boolean) {

    }

    public equals(newSchedule: Schedule){
        return this.sceneStart === newSchedule.sceneStart
        && this.sceneDuration === newSchedule.sceneDuration
        && this.paused === newSchedule.paused;
    }
}