import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { Schedule } from '../../domain/schedule';
import Windmill from './windmill';

const styles = createStyles({
    house1Style: {
        position: 'absolute',
        left: '75%',
        top: '57%',
        width: '125px',
        height: '125px',
        zIndex: 8
    },
    house2Style: {
        position: 'absolute',
        left: '80%',
        top: '59%',
        width: '125px',
        height: '125px',
        zIndex: 8
    },
    house3Style: {
        position: 'absolute',
        left: '77%',
        top: '55%',
        width: '125px',
        height: '125px',
        zIndex: 8
    }    
});

interface IWindmillListProps extends WithStyles<typeof styles> {
    schedule: Schedule;
}

class WindmillList extends React.Component<IWindmillListProps> {
 
    public render() {
        const { classes: { house1Style, house2Style, house3Style }, schedule } = this.props;
        return <div>
            <div className={house1Style}>
                <Windmill schedule={schedule}/>
            </div>
            <div className={house2Style}>
                <Windmill schedule={schedule}/>
            </div>
            <div className={house3Style}>
                <Windmill schedule={schedule}/>
            </div>
        </div>
    }
}

export default withStyles(styles)(WindmillList);