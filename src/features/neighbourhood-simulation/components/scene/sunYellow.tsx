import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import sun from '../../../../img/sun.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes sun': {
        from: {top: '45%'},
        to: {top: '90%'}
    },
    sunStart: {
        position: 'absolute',
        left: '45%',
        top: '45%',
        right: '0px',
        bottom: '0px',
        width: '150px',
        height: '152px',
        background: 'transparent no-repeat center center',
        zIindex: 2,
    }
});

interface ISunYellowProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface ISunYellowState {
    duration: number;
    delay: number;
}

class SunYellow extends React.Component<ISunYellowProps, ISunYellowState> {
 
    private DURATION: number = 0.5;

    private DELAY: number = 0.25;

    constructor(props: ISunYellowProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate() {
        this.setState(this.calculateSchedule());
    }

    public render() {
        const { classes: {sunStart}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `sun ${duration}s ${delay}s`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return Math.abs(delay) >= duration
            ? null
            : (
                <img className = {sunStart} style={style} src={sun}/>
            );
    }

    private calculateSchedule() {
        const { schedule: { sceneDuration, sceneStart }} = this.props;
        const duration = sceneDuration * this.DURATION;
        const delay = sceneDuration * this.DELAY - sceneStart;
        return {duration, delay};
    }
}

export default withStyles(styles)(SunYellow);