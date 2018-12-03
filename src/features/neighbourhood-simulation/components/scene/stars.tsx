import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import stars from '../../../../img/stars.png';

const styles = createStyles({
    starStart: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '200px',
        width: '100%',
        background: 'transparent repeat bottom center',
        zIndex: 5,
        opacity:0
    },
    starEnd: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '200px',
        width: '100%',
        background: 'transparent repeat bottom center',
        zIndex: 5,
        opacity:1,
        transition: 'opacity 5s',
    }
});

interface IStarProps extends WithStyles<typeof styles> {
    time?: number; 
}

interface IStarState {
    startAnimation: boolean;
}

class Stars extends React.Component<IStarProps, IStarState> {
    
    constructor(props: IStarProps) {
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
        const styleClass = this.state.startAnimation ? classes.starEnd : classes.starStart;
        return (
            <img className = {styleClass} src={stars}/>
        )
    }
}

export default withStyles(styles)(Stars);