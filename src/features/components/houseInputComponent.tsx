import { withStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
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
          <TextField id="houses" label="Houses" type="number" InputLabelProps={{ shrink: true }} value={houseCount} fullWidth={true} margin="normal" onChange={handleHouseCountChange} />
        </FormControl>
      </div>
    );
  }
}

export default HouseInputComponent;