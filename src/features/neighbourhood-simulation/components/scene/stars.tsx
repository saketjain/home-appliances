import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import stars from '../../../../img/stars.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes stars': {
        from: {opacity: 0},
        to: {opacity: 1}
    },
    starsStyle: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '200px',
        width: '100%',
        background: 'transparent repeat bottom center',
        zIndex: 5,
        opacity: 0
    }
});

interface IStarsProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface IStarsState {
    duration: number;
    delay: number;
}

class Stars extends React.Component<IStarsProps, IStarsState> {
 
    private DURATION: number = 0.75;

    private DELAY: number = 0;

    constructor(props: IStarsProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate() {
        this.setState(this.calculateSchedule());
    }

    public render() {
        const { classes: {starsStyle}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `stars ${duration}s ${delay}s forwards`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return this.shouldRender()
            ? (
                <img className = {starsStyle} style={style} src={stars}/>
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

export default withStyles(styles)(Stars);