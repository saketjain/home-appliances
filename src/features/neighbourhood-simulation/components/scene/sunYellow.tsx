import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import sun from '../../../../img/sun.png';

const styles = createStyles({
    sunStart: {
        position: 'absolute',
        left: '45%',
        top: '50%',
        right: '0px',
        bottom: '0px',
        width: '150px',
        height: '152px',
        background: 'transparent no-repeat center center',
        zIindex: 2
    },
    sunEnd: {
        position: 'absolute',
        left: '45%',
        top: '50%',
        right: '0px',
        bottom: '0px',
        width: '150px',
        height: '152px',
        background: 'transparent no-repeat center center',
        zIindex: 2,
        transition: 'transform 5s ease-in-out',
        transform: 'translate(0px, 100px)'
    }
});

interface ISunYellowProps extends WithStyles<typeof styles> {
    time?: number; 
}

interface ISunYellowState {
    startAnimation: boolean;
}

class SunYellow extends React.Component<ISunYellowProps, ISunYellowState> {
    
    constructor(props: ISunYellowProps) {
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
        }, 1000);
    }

    public render() {
        const { classes } = this.props;
        const styleClass = this.state.startAnimation ? classes.sunEnd : classes.sunStart
        return (
            <img className = {styleClass} src={sun}/>
        )
    }
}

export default withStyles(styles)(SunYellow);