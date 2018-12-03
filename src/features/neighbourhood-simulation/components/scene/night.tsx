import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';

const styles = createStyles({
    skyStart: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background:'#000',
        zIndex: 4,
        opacity: 0
    },
    skyEnd: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background:'#000',
        zIndex: 4,
        opacity: 0.8,
        transition: 'opacity 5s',
    }
});

interface INightProps extends WithStyles<typeof styles> {
    time?: number; 
}

interface INightState {
    startAnimation: boolean;
}

class Night extends React.Component<INightProps, INightState> {
    
    constructor(props: INightProps) {
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
        const styleClass = this.state.startAnimation ? classes.skyEnd : classes.skyStart;
        return (
            <div className = {styleClass}/>
        )
    }
}

export default withStyles(styles)(Night);