import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import moon from '../../../../img/moon.png';

const styles = createStyles({
    moonStart: {
        position: 'absolute',
        left: '45%',
        top: '60%',
        width: '168px',
        height: '168px',
        background: 'transparent no-repeat center center',
        zIindex: 6,
        opacity: 0
    },
    moonEnd: {
        position: 'absolute',
        left: '45%',
        top: '60%',
        width: '168px',
        height: '168px',
        background: 'transparent no-repeat center center',
        zIindex: 6,
        opacity: 1,
        transition: 'opacity 5s, transform 5s',
        transform: 'translate(0px, -250px)',
    }
});

interface IMoonProps extends WithStyles<typeof styles> {
    time?: number; 
}

interface IMoonState {
    startAnimation: boolean;
}

class Moon extends React.Component<IMoonProps, IMoonState> {
    
    constructor(props: IMoonProps) {
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
        }, 17000);
    }

    public render() {
        const { classes } = this.props;
        const styleClass = this.state.startAnimation ? classes.moonEnd : classes.moonStart
        return (
            <img className = {styleClass} src={moon}/>
        )
    }
}

export default withStyles(styles)(Moon);