import withStyles, { StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";
import { inject, observer } from "mobx-react";
import * as React from "react";

const styles: StyleRulesCallback<'root'> = theme => ({
    pullRight: {
        float: 'right'
    },
    root: {
        width: '90%'
    }
});

@inject('simulationStore')
@observer
class SunlightComponent extends React.Component<any> {
    
    public render() {
        const { classes } = this.props;
        const { sunlightSlider, handleSunlightChange } = this.props.simulationStore;
        return (
            <div className={classes.root}>
            <Typography className={classes.paper} variant="subheading" gutterBottom={true} align="left">
                    Sunlight:
            </Typography>
            <Slider
                value={sunlightSlider}
                aria-labelledby="label"
                onChange={handleSunlightChange}
                step={1}
            />
            </div>
        );
    }
}

export default withStyles(styles)(SunlightComponent);
