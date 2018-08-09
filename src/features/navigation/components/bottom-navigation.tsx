import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import Notifications from '@material-ui/icons/Notifications';
import Settings from '@material-ui/icons/Settings';
import * as React from 'react';
import { AppConstants } from '../../../constants';
import history from './../../../navigation-history';

export default class TabNavigation extends React.Component {
  public state = {
    value: 0,
  };

  public render() {
    return (
      <div style={{position: "fixed", bottom:"0", width: "100%"}}>
      <Paper style={{marginRight:"15px"}}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          fullWidth={true}
        >
          <Tab icon={<BusinessCenter />} />
          <Tab icon={<Notifications />} />
          <Tab icon={<Settings />}/>
        </Tabs>
      </Paper>
      </div>
    );
  }
  
  private handleChange = (event: any, value: number) => {
    this.setState({ value });
    switch (value) {
      case 1: history.push(AppConstants.CLIENT_URLS.ALERTS); break;
      case 2: history.push(AppConstants.CLIENT_URLS.SETTINGS); break;
      default: history.push(AppConstants.CLIENT_URLS.PORTFOLIO_SUMMARY);
    }
  };


}
