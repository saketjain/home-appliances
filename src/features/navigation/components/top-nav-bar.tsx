import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRulesCallback, WithStyles } from "@material-ui/core/styles/withStyles";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import history from '../../../navigation-history';
import { DrawerMenuStore } from '../stores/drawer-menu-store';
import { TopNavStore } from '../stores/top-nav-store';
import DrawerMenu from './drawer-menu';

const styles: StyleRulesCallback = theme => createStyles({
  center: {
    margin: "0 auto"
  },
  flex: {
    flex: 1
  },
  root: {
    flexGrow: 1
  }
});

interface ITopNavBarProps extends WithStyles<typeof styles> {
  drawerMenuStore?: DrawerMenuStore;
  topNavStore?: TopNavStore;  
}

interface ITopNavBarState {
  anchorElement?: HTMLElement;
}

@inject('topNavStore', 'drawerMenuStore')
@observer
class TopNavBar extends React.Component<ITopNavBarProps, ITopNavBarState> {

  constructor(props: ITopNavBarProps) {
    super(props);
    this.state = {
    };
  }
  
  public render() {
    const { classes, topNavStore } = this.props;
    const showBackButtton = topNavStore!.isShowBackButton();
    return <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {showBackButtton ? this.renderBackButton() : this.renderLeftMenuButton()}
            <Typography variant="title" color="inherit" className={classes.flex}>
              Simulation app
            </Typography>
          </Toolbar>
        </AppBar>
        <DrawerMenu />
      </div>
  }

  private renderLeftMenuButton(){
    return (
      <IconButton onClick={this.handleLeftMenu} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
    )
  }

  private renderBackButton(){
    return (
      <IconButton onClick={history.goBack} color="inherit" aria-label="Back">
        <ArrowBackIcon />
      </IconButton>
    )
  }

  private handleLeftMenu = () => {
    this.props.drawerMenuStore!.setOpen(true);
  };

}

export default withStyles(styles)(TopNavBar);
