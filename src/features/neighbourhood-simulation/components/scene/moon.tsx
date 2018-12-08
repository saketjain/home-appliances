import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import moon from '../../../../img/moon.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes moon': {
        from: {top: '60%', opacity: 0},
        to: {top: '30%', opacity: 1}
    },
    moonStyle: {
        position: 'absolute',
        left: '45%',
        top: '60%',
        right: '0px',
        bottom: '0px',
        width: '168px',
        height: '168px',
        background: 'transparent repeat bottom center',
        zIndex: 6,
        opacity: 0
    }
});

interface IMoonProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface IMoonState {
    duration: number;
    delay: number;
}

class Moon extends React.Component<IMoonProps, IMoonState> {
 
    private DURATION: number = 0.25;

    private DELAY: number = 0.75;

    constructor(props: IMoonProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate(prevProps: IMoonProps) {
        if(!this.props.schedule.equals(prevProps.schedule)) {
            this.setState(this.calculateSchedule());
        }
    }

    public render() {
        const { classes: {moonStyle}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `moon ${duration}s ${delay}s forwards`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return this.shouldRender()
            ? (
                <img className = {moonStyle} style={style} src={moon}/>
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

export default withStyles(styles)(Moon);