import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import ground from '../../../../img/ground.png';

const styles = createStyles({
    ground: {
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        height: '232px',
        background: 'transparent repeat-x bottom center',
        zIindex: 3
    }
});

interface IGroundProps extends WithStyles<typeof styles> {
    time?: number; 
}

class Ground extends React.Component<IGroundProps> {
    
    public render() {
        const { classes } = this.props;
        return (
            <img className = {classes.ground} src={ground}/>
        )
    }
}

export default withStyles(styles)(Ground);