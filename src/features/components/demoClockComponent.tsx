import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import withStyles, { StyleRulesCallback } from "@material-ui/core/styles/withStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { inject, observer } from "mobx-react";
import * as React from "react";

const styles: StyleRulesCallback<"root"> = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
    }
});

@inject('mainContainerStore')
@observer
class DemoClockComponent extends React.Component<any> {
    public render() {
        const { currentClockRate, decreaseClockRate, increaseclockRate } = this.props.mainContainerStore;

        return(
            <div>
                <p>Demo clock</p>
                <MobileStepper
                    variant="progress"
                    steps={4}
                    position="static"
                    activeStep={currentClockRate}
                    className={this.props.classes.root}
                    nextButton={
                    <Button size="small" onClick={increaseclockRate}>
                        +
                        <KeyboardArrowRight />
                    </Button>
                    }
                    backButton={
                        <Button size="small" onClick={decreaseClockRate}>
                        <KeyboardArrowLeft />
                        -
                    </Button>
                    }
                />
            </div>
        );
    }
}

export default withStyles(styles)(DemoClockComponent);
