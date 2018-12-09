import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import house1 from '../../../../img/house1.png';
import house2 from '../../../../img/house2.png';
import { Schedule } from '../../domain/schedule';

const styles = createStyles({
    '@keyframes house': {
        '50%': {background: `url(${house1})`, backgroundSize: '100% 100%'},
        '51%': {background: `url(${house2})`, backgroundSize: '100% 100%'},
        '100%': {background: `url(${house2})`, backgroundSize: '100% 100%'}
    },
    houseStyle: {
        width: '100%',
        height: '100%',
        background: `transparent url(${house1})`,
        backgroundSize: '100% 100%',
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

    private DELAY: number = 0;

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
        const animation = `house ${duration}s ${delay}s forwards`;
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