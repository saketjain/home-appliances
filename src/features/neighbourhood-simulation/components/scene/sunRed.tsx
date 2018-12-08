import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import sun2 from '../../../../img/sun2.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes sunRed': {
        from: {opacity: 0, top: '45%'},
        to: {opacity: 0.8, top: '96%'}
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
        opacity: 0
    }
});

interface ISunRedProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface ISunRedState {
    duration: number;
    delay: number;
}

class SunRed extends React.Component<ISunRedProps, ISunRedState> {
 
    private DURATION: number = 0.5;

    private DELAY: number = 0;

    constructor(props: ISunRedProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate() {
        this.setState(this.calculateSchedule());
    }

    public render() {
        const { classes: {sunStart}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `sunRed ${duration}s ${delay}s forwards`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return this.shouldRender()
            ? (
                <img className = {sunStart} style={style} src={sun2}/>
            ) : null;
    }

    private calculateSchedule() {
        const { schedule: { sceneDuration, sceneStart }} = this.props;
        const duration = sceneDuration * this.DURATION;
        const delay = sceneDuration * this.DELAY - sceneStart;
        return {duration, delay};
    }

    private shouldRender() {
        const { schedule: { sceneDuration, sceneStart }} = this.props;
        const duration = sceneDuration * this.DURATION;
        const delay = sceneDuration * this.DELAY;
        return sceneStart <= delay + duration;
    }
}

export default withStyles(styles)(SunRed);