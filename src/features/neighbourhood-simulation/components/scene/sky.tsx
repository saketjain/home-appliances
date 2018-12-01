import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import sky from '../../../../img/sky.png';

const styles = createStyles({
    sky: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background: 'transparent repeat-x top left',
    }
});

interface ISkyProps extends WithStyles<typeof styles> {
    time?: number; 
}

class Sky extends React.Component<ISkyProps> {
    
    public render() {
        const { classes } = this.props;
        return (
            <img className = {classes.sky} src={sky}/>
        )
    }
}

export default withStyles(styles)(Sky);