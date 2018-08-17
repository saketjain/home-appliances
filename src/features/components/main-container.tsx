import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import withStyles, { StyleRulesCallback } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";
import DemoClockComponent from "./demoClockComponent";
import HouseInputComponent from "./houseInputComponent";
import SunlightComponent from "./sunlightComponent";

const styles: StyleRulesCallback<"typography"> = theme => ({
  center: {
    margin: '0 auto'
  },
  divider: {
    margin: '20px 0'
  },
  typography: {
    margin: "20px 0"
  }
});

@observer
class MainContainer extends React.Component<any> {
  public render() {
    const { classes } = this.props;
    return <div>
        <Typography className={classes.typography} variant="headline" gutterBottom={true} align="center">
          Neighbourhood Simulation
        </Typography>
        <Grid container={true} spacing={8}>
          <Grid item={true} xs={12} sm={6} className={classes.center}>
            <div>
              <HouseInputComponent />
              <Divider className={classes.divider} light={true} />
              <SunlightComponent />
              <Divider className={classes.divider} light={true} />
              <DemoClockComponent />
            </div>
          </Grid>
        </Grid>
      </div>;
  }
}

export default withStyles(styles)(MainContainer);
