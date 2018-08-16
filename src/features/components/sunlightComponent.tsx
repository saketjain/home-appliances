import withStyles, { StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import Slider from "@material-ui/lab/Slider";
import { inject, observer } from "mobx-react";
import * as React from "react";

const styles: StyleRulesCallback<'root'> = theme => ({
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
            <p>Sunlight:</p>
            <Slider
                value={sunlight}
                aria-labelledby="label"
                onChange={handleSunlightChange}
            />
            </div>
        );
    }
}

export default withStyles(styles)(SunlightComponent);
