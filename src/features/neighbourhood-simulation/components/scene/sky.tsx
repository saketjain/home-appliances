import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import sky from '../../../../img/sky.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes sky': {
        from: {backgroundColor: '#fff'},
        to: {backgroundColor: '#4F0030'}
    },
    skyStyle: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background: '#fff repeat-x top left',
        zIindex: 1,
    }
});

interface ISkyProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface ISkyState {
    duration: number;
    delay: number;
}

class Sky extends React.Component<ISkyProps, ISkyState> {
 
    private DURATION: number = 0.75;

    private DELAY: number = 0;

    constructor(props: ISkyProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate(prevProps: ISkyProps) {
        if(!this.props.schedule.equals(prevProps.schedule)) {
            this.setState(this.calculateSchedule());
        }
    }

    public render() {
        const { classes: {skyStyle}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `sky ${duration}s ${delay}s forwards`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return this.shouldRender()
            ? (
                <img className = {skyStyle} style={style} src={sky}/>
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

export default withStyles(styles)(Sky);