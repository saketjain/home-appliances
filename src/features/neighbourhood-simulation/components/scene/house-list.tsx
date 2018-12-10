import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { Schedule } from '../../domain/schedule';
import House from './house';

const styles = createStyles({
    house1Style: {
        position: 'absolute',
        left: '25%',
        top: '85%',
        width: '25px',
        height: '25px',
        zIndex: 8
    },
    house2Style: {
        position: 'absolute',
        left: '33%',
        top: '80%',
        width: '35px',
        height: '35px',
        zIndex: 8
    },
    house3Style: {
        position: 'absolute',
        left: '40%',
        top: '80%',
        width: '50px',
        height: '50px',
        zIndex: 8
    }    
});

interface IHouseListProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

class HouseList extends React.Component<IHouseListProps> {
 
    public render() {
        const { classes: { house1Style, house2Style, house3Style }, schedule } = this.props;
        return <div>
            <div className={house1Style}>
                <House schedule={schedule}/>
            </div>
            <div className={house2Style}>
                <House schedule={schedule}/>
            </div>
            <div className={house3Style}>
                <House schedule={schedule}/>
            </div>
        </div>
    }
}

export default withStyles(styles)(HouseList);