import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import sun from '../../../../img/sun2.png';

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
        zIindex: 2,
        opacity: 0
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
        opacity: 0.8,
        transition: 'opacity 5s, transform 5s',
        transform: 'translate(0px, 250px)',
    }
});

interface ISunRedProps extends WithStyles<typeof styles> {
    time?: number; 
}

interface ISunRedState {
    startAnimation: boolean;
}

class SunRed extends React.Component<ISunRedProps, ISunRedState> {
    
    constructor(props: ISunRedProps) {
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
        const styleClass = this.state.startAnimation ? classes.sunEnd : classes.sunStart
        return (
            <img className = {styleClass} src={sun}/>
        )
    }
}

export default withStyles(styles)(SunRed);