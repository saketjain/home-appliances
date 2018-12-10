import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes night': {
        from: {opacity: 0},
        to: {opacity: 0.8}
    },
    nightStyle: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background: '#000',
        zIindex: 4,
        opacity: 0
    }
});

interface INightProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface INightState {
    duration: number;
    delay: number;
}

class Night extends React.Component<INightProps, INightState> {
 
    private DURATION: number = 0.8;

    private DELAY: number = 0.5;

    constructor(props: INightProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate(prevProps: INightProps) {
        if(!this.props.schedule.equals(prevProps.schedule)) {
            this.setState(this.calculateSchedule());
        }
    }

    public render() {
        const { classes: {nightStyle}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `night ${duration}s ${delay}s forwards`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return this.shouldRender()
            ? (
                <div className = {nightStyle} style={style}/>
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

export default withStyles(styles)(Night);