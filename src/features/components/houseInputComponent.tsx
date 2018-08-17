import { withStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from 'mobx-react';
import * as React from 'react';

@inject("mainContainerStore")
@observer
class HouseInputComponent extends React.Component<any> {
  public render() {
    const {
      houseCount,
      handleHouseCountChange
    } = this.props.mainContainerStore;

    return (
      <div>
        <FormControl>
          <TextField
            id="houses"
            label={<Typography variant="title" gutterBottom={true} align="center">
              Houses
            </Typography>}
              type="number"
              fullWidth={true}
              InputLabelProps={{ shrink: true }}
              value={houseCount}
              margin="normal" 
              onChange={handleHouseCountChange} 
            />
            </FormControl>
      </div>
    );
  }
}

export default HouseInputComponent;