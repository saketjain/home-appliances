import IconButton from "@material-ui/core/IconButton";
import withStyles, { StyleRulesCallback } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PauseCircleFilled from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import Stop from "@material-ui/icons/Stop";
import Slider from "@material-ui/lab/Slider";
import { inject, observer } from "mobx-react";
import * as Moment from "moment";

import * as React from "react";

const styles: StyleRulesCallback<"root"> = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    clockWidth: {
        width: '90%'
    },
    pullRight: {
        float: 'right'
    },
    root: {
        flexGrow: 1,
        maxWidth: 550,
    },
    typography: {

    }
});

@inject('simulationStore')
@observer
class DemoClockComponent extends React.Component<any> {
    public render() {
        const { 
            classes, 
            simulationStore: {
                adjustClockRate,
                clockRateSlider,
                clockRate, 
                clockSlider,
                adjustClock,
                currentTimeStamp, 
                handlePauseClick,
                handlePlayClick,
                handleStopClick
            } }= this.props;
            
        return <div>
            <Typography variant="subheading" gutterBottom={true} align="left">
              Simulation clock:
            </Typography>

            <Typography variant="caption" gutterBottom={true} align="center">
              Clock Speed: {clockRate}
            </Typography>

            <div className={classes.clockWidth}>
              <Slider value={clockRateSlider} aria-labelledby="Clock rate change" onChange={adjustClockRate} />
            </div>

            <Typography variant="caption" gutterBottom={true} align="center">
                Current Time: {currentTimeStamp.toTimeString()}
            </Typography>

            <div className={classes.clockWidth}>
              <Slider value={clockSlider} aria-labelledby="label" onChange={adjustClock}/>
            </div>

            <div style={{ textAlign: "center" }}>
              <IconButton color="primary" className={classes.button} onClick={handlePauseClick} aria-label="Pause the clock">
                <PauseCircleFilled />
              </IconButton>

              <IconButton color="primary" className={classes.button} onClick={handlePlayClick} aria-label="Play the clock">
                <PlayCircleFilled />
              </IconButton>

              <IconButton color="primary" className={classes.button} onClick={handleStopClick} aria-label="Play the clock">
                <Stop />
              </IconButton>
            </div>
          </div>;
    }
}

export default withStyles(styles)(DemoClockComponent);
