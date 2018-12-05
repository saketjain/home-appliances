import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import clouds from '../../../../img/clouds.png';

const styles = createStyles({
    cloudStart: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        zIindex: 3,
        background: 'transparent repeat-x top left',
    },
    cloudEnd: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        zIindex: 3,
        background: 'transparent repeat-x top left',
        opacity: 0,
        transition: 'opacity 30s, transform 30s',
        transform: 'translate(1000px, 0px)',
    }    
});

interface ICloudProps extends WithStyles<typeof styles> {
    time?: number; 
}

interface ICloudState {
    startAnimation: boolean;
}

class Clouds extends React.Component<ICloudProps, ICloudState> {
    
    constructor(props: ICloudProps) {
        super(props);
        this.state = {
            startAnimation: false
        };
    }

    public componentWillMount() {
        setTimeout(() => {
            this.setState({
                startAnimation: true
            })
        }, 0);
    }

    public render() {
        const { classes } = this.props;
        const styleClass = this.state.startAnimation ? classes.cloudEnd : classes.cloudStart;
        return (
            <img className = {styleClass} src={clouds}/>
        )
    }
}

export default withStyles(styles)(Clouds);