import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import clouds from '../../../../img/clouds.png';

const styles = createStyles({
    clouds: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background: 'transparent repeat-x top left',
        zIindex: 3
    }
});

interface ICloudProps extends WithStyles<typeof styles> {
    time?: number; 
}

class Clouds extends React.Component<ICloudProps> {
    
    public render() {
        const { classes } = this.props;
        return (
            <img className = {classes.clouds} src={clouds}/>
        )
    }
}

export default withStyles(styles)(Clouds);