import IconButton from "@material-ui/core/IconButton";
import withStyles, { StyleRulesCallback } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
// import FastForwrd from "@material-ui/icons/FastForward";
// import FastRewind from "@material-ui/icons/FastRewind";
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

@inject('mainContainerStore')
@observer
class DemoClockComponent extends React.Component<any> {
    public render() {
        const { 
            classes, 
            mainContainerStore: {
                handleClockRateChange,
                currentClockRate, 
                CurrentClockRateAlias,
                currentTimeStamp, 
                handleStartHourChange,
                handlePauseClick,
                handlePlayClick,
                handleStopClick,
                startHour,
                timerPaused 
            } }= this.props;
            
        return <div>
            <Typography variant="subheading" gutterBottom={true} align="left">
              Simulation clock:
            </Typography>

            <Typography variant="caption" gutterBottom={true} align="center">
              Current clock rate: {CurrentClockRateAlias}
            </Typography>

            <div className={classes.clockWidth}>
              <Slider value={currentClockRate} aria-labelledby="Clock rate change" onChange={handleClockRateChange} step={1} min={0} max={4} />
            </div>

            {!currentTimeStamp ? <Typography variant="caption" gutterBottom={true} align="center">
                Start simulation from: {startHour
                  .toString()
                  .padStart(2, 0)}
                :00:00
              </Typography> : <Typography variant="caption" gutterBottom={true} align="center">
                Simulation started at: {currentTimeStamp.format("HH:mm:ss")}
              </Typography>}

            <div className={classes.clockWidth}>
              <Slider value={startHour} aria-labelledby="label" onChange={handleStartHourChange} min={0} max={24} step={1} />
            </div>

            <div style={{ textAlign: "center" }}>

              <IconButton color="primary" className={classes.button} disabled={!timerPaused && !currentTimeStamp} onClick={handlePauseClick} aria-label="Pause the clock">
                <PauseCircleFilled />
              </IconButton>

              <IconButton color="primary" className={classes.button} disabled={currentTimeStamp} onClick={handlePlayClick} aria-label="Play the clock">
                <PlayCircleFilled />
              </IconButton>
              
              <IconButton color="primary" className={classes.button} disabled={!currentTimeStamp} onClick={handleStopClick} aria-label="Play the clock">
                <Stop />
              </IconButton>
            </div>
          </div>;
    }
}

export default withStyles(styles)(DemoClockComponent);
