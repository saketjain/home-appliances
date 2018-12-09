import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import windmill from '../../../../img/windmill.png';
import windmill1 from '../../../../img/windmill1.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes windmill': {
        '50%': {background: `url(${windmill1})`, backgroundSize: '200px 200px'},
        '51%': {background: `url(${windmill})`, backgroundSize: '200px 200px'},
        '100%': {background: `url(${windmill})`, backgroundSize: '200px 200px'}
    },
    houseStyle: {
        position: 'absolute',
        left: '75%',
        top: '75%',
        width: '200px',
        height: '200px',
        background: `transparent url(${windmill1})`,
        backgroundSize: '200px 200px',
        zIndex: 8,
    }
});

interface IHouseProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

interface IHouseState {
    duration: number;
    delay: number;
}

class House extends React.Component<IHouseProps, IHouseState> {
 
    private DURATION: number = 1;

    private DELAY: number = 0.5;

    constructor(props: IHouseProps){
        super(props);
        this.state = this.calculateSchedule();
    }

    public componentDidUpdate(prevProps: IHouseProps) {
        if(!this.props.schedule.equals(prevProps.schedule)) {
            this.setState(this.calculateSchedule());
        }
    }

    public render() {
        const { classes: {houseStyle}, schedule: { paused }} = this.props;
        const {duration, delay} = this.state;
        const animation = `windmill ${duration}s ${delay}s forwards`;
        const style = paused ? {animation: `${animation} paused`} : {animation: `${animation} running`}; 
        return <div className={houseStyle} style={style}/>
    }

    private calculateSchedule() {
        const { schedule: { sceneDuration, sceneStart }} = this.props;
        const duration = sceneDuration * this.DURATION;
        const delay = sceneDuration * this.DELAY - sceneStart;
        return {duration, delay};
    }
}

export default withStyles(styles)(House);