import IconButton from "@material-ui/core/IconButton";
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRulesCallback, WithStyles } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PauseCircleFilled from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import Stop from "@material-ui/icons/Stop";
import Slider from "@material-ui/lab/Slider";
import { observer } from "mobx-react";
import * as moment from 'moment';

import * as React from "react";
import { DemoClockStore } from "../stores/demo-clock-store";

const styles = (theme: Theme) => createStyles({
    button: {
        margin: theme.spacing.unit
    },
    clockWidth: {
        width: '100%'
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

export type IOnPlay = (currentTime: Date, currentClockRate: number) => void;
export type IOnPause = (currentTime: Date, currentClockRate: number) => void;
export type IOnStop = () => void;
export type IOnChange = (currentTime: Date, currentClockRate: number) => void;

interface IDemoClockProps extends WithStyles<typeof styles>{
    onPlay: IOnPlay;
    onPause: IOnPause
    onStop: IOnStop;
    onChange: IOnChange;
}

@observer
class DemoClockComponent extends React.Component<IDemoClockProps> {
    
    private store = new DemoClockStore();

    public render() {
        const { 
            classes, 
        } = this.props;

        const {
            clockRateSlider,
            clockRate, 
            clockSlider,
            currentTimeStamp,
        } = this.store;
            
        return <div>
            <Typography variant="body2" gutterBottom={true} align="center">
              Clock Speed: {clockRate}
            </Typography>

            <div className={classes.clockWidth}>
              <Slider value={clockRateSlider} onChange={this.onClockRateChange} />
            </div>
            <br/>
            <Typography variant="body2" gutterBottom={true} align="center">
                Current Time: {moment(currentTimeStamp).format('HH:mm:ss')}
            </Typography>

            <div className={classes.clockWidth}>
              <Slider value={clockSlider} onChange={this.onClockChange}/>
            </div>
            <div style={{ textAlign: "center" }}>
              <IconButton color="primary" className={classes.button} onClick={this.handlePauseClick} aria-label="Pause the clock">
                <PauseCircleFilled />
              </IconButton>

              <IconButton color="primary" className={classes.button} onClick={this.handlePlayClick} aria-label="Play the clock">
                <PlayCircleFilled />
              </IconButton>

              <IconButton color="primary" className={classes.button} onClick={this.handleStopClick} aria-label="Play the clock">
                <Stop />
              </IconButton>
            </div>
          </div>;
    }

    private handlePlayClick = () => {
        const { handlePlayClick } = this.store;
        handlePlayClick(this.props.onPlay);
    }

    private handlePauseClick = () => {
        const { handlePauseClick } = this.store;
        handlePauseClick(this.props.onPause);
    }

    private handleStopClick = () => {
        const { handleStopClick } = this.store;
        handleStopClick(this.props.onStop);
    }

    private onClockChange = (event: any, clockSlider: number) => {
        const { adjustClock } = this.store;
        adjustClock(clockSlider, this.props.onChange);
    }

    private onClockRateChange = (event: any, clockRateSlider: number) => {
        const { adjustClockRate } = this.store;
        adjustClockRate(clockRateSlider, this.props.onChange);
    }

}

export default withStyles(styles)(DemoClockComponent);
