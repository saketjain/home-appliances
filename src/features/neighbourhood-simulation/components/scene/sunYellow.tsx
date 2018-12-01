import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import sun from '../../../../img/sun.png';

const styles = createStyles({
    sunYellow: {
        position: 'absolute',
        left: '45%',
        top: '50%',
        right: '0px',
        bottom: '0px',
        width: '150px',
        height: '152px',
        background: 'transparent no-repeat center center',
        zIindex: 2
    }
});

interface ISunYellowProps extends WithStyles<typeof styles> {
    time?: number; 
}

class SunYellow extends React.Component<ISunYellowProps> {
    
    public render() {
        const { classes } = this.props;
        return (
            <ReactCSSTransitionGroup transitionName="sunYellow">
                <img className = {classes.sunYellow} src={sun}/>
            </ReactCSSTransitionGroup>
        )
    }
}

export default withStyles(styles)(SunYellow);