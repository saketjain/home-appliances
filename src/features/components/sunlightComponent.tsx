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

@inject('mainContainerStore')
@observer
class SunlightComponent extends React.Component<any> {
    
    public render() {
        const { classes } = this.props;
        const { sunlight, handleSunlightChange } = this.props.mainContainerStore;
        return (
            <div className={classes.root}>
            <Typography className={classes.paper} variant="subheading" gutterBottom={true} align="left">
                    Sunlight:
            </Typography>
            <Slider
                value={sunlight}
                aria-labelledby="label"
                onChange={handleSunlightChange}
                step={1}
            />
            </div>
        );
    }
}

export default withStyles(styles)(SunlightComponent);
