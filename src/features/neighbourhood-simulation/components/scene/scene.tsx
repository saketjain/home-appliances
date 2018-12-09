import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { observer } from 'mobx-react';
import * as React from 'react';
import DemoClockComponent from '../../../demo-clock/components/demoClockComponent';
import { Schedule } from '../../domain/schedule';
import Clouds from './clouds';
import Ground from './ground';
import House from './house';
import Moon from './moon';
import Night from './night';
import Sky from './sky';
import Stars from "./stars";
import SunRed from './sunRed';
import SunYellow from './sunYellow';
import Windmill from './windmill';

const styles = createStyles({
    clock: {
        position: 'absolute',
        width: '20%',
        left: '0',
        bottom: '0',
        padding: '10px',
        zIndex: 8,
        background: '#fff',
        height: '150px'
    }
});


interface ISceneState {
    schedule: Schedule;
}

@observer
class Scene extends React.Component<WithStyles<typeof styles>, ISceneState> {
    
    private SECONDS_IN_A_DAY = 24 * 3600;

    constructor(props: WithStyles<typeof styles>) {
        super(props);
        this.state = {
            schedule: new Schedule(0, 0, true)
        }
    }

    public render() {
        const { classes: { clock }} = this.props;
        const { schedule } = this.state;
        return (
            <div>
                <Sky schedule={schedule}/>
                <Night schedule={schedule}/>
                <Moon schedule={schedule}/>
                <Stars schedule={schedule}/>
                <Clouds schedule={schedule}/>
                <SunYellow schedule={schedule}/>
                <SunRed schedule={schedule}/>
                <House schedule={schedule}/>
                <Windmill schedule={schedule}/>
                <Ground/>
                <div className={clock}>
                    <DemoClockComponent onChange={this.onChange} onPause={this.onPause} onPlay={this.onPlay} onStop={this.onStop}/>
                </div>
            </div>
        )
    }

    private onChange = (currentTime: Date, clockRate: number) => {
        // tslint:disable-next-line:no-console
        console.log('ts: ' + currentTime, ' rate: ' + clockRate);
        this.calculateSchedule(currentTime, clockRate);
    }

    private onPlay = (currentTime: Date, clockRate: number) => {
        this.calculateSchedule(currentTime, clockRate);
    }
    
    private onPause = (currentTime: Date, clockRate: number) => {
        const schedule = this.state.schedule;
        schedule.paused = true;
        this.setState({
            schedule
        });
    }

    private onStop = () => {
        return null;
    }

    private calculateSchedule(currentTime: Date, clockRate: number) {
        const hour = currentTime.getHours();
        const duration = clockRate < 1 ? this.SECONDS_IN_A_DAY : this.SECONDS_IN_A_DAY / clockRate;
        const schedule = new Schedule(hour, duration, false);
        this.setState({
            schedule
        })
    }
}

export default withStyles(styles)(Scene);