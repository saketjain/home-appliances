import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withStyles, {
  StyleRulesCallback
} from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";
import DemoClockComponent from "./demoClockComponent";
import HouseInputComponent from "./houseInputComponent";
import SunlightComponent from "./sunlightComponent";

const styles: StyleRulesCallback<"paper"> = theme => ({
  paper: {
    padding: "30px"
  }
});

@observer
class MainContainer extends React.Component<any> {
  public render() {
    return (
      <React.Fragment>
        <Typography variant="title" gutterBottom={true}>
          Neighbourhood Simulation
        </Typography>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12} sm={6}>
            <Paper className={this.props.classes.paper}>
              <HouseInputComponent />
              <SunlightComponent />
              <DemoClockComponent />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MainContainer);
