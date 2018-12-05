import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import sky from '../../../../img/sky.png';

const styles = createStyles({
    '@keyframes sky': {
        from: {background: '#fff'},
        to: {background: '#4F0030'}
    },
    skyStart: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        background: '#fff repeat-x top left',
        animationName: '$sky',
        animationDuration: '20s'
    }
});

interface ISkyProps extends WithStyles<typeof styles> {
    time?: number; 
}

interface ISkyState {
    startAnimation: boolean;
}

class Sky extends React.Component<ISkyProps, ISkyState> {
    
    constructor(props: ISkyProps) {
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
        const styleClass = classes.skyStart;
        return (
            <img className = {styleClass} src={sky}/>
        )
    }
}

export default withStyles(styles)(Sky);