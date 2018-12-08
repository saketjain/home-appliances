import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import clouds from '../../../../img/clouds.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes clouds': {
        from: {transform: 'translateX(0%)', opacity: 1},
        to: {transform: 'translateX(50%)', opacity: 0}
    },
    cloudsStyle: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background: 'transparent repeat-x top left',
        zIndex: 3,
    }
});

interface ICloudsProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface ICloudsState {
    duration: number;
    delay: number;
}

class Clouds extends React.Component<ICloudsProps, ICloudsState> {
 
    private DURATION: number = 1;

    private DELAY: number = 0;

    constructor(props: ICloudsProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate() {
        this.setState(this.calculateSchedule());
    }

    public render() {
        const { classes: {cloudsStyle}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `clouds ${duration}s ${delay}s forwards`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return this.shouldRender()
            ? (
                <img className = {cloudsStyle} style={style} src={clouds}/>
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

export default withStyles(styles)(Clouds);