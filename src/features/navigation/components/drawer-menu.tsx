import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { DrawerMenuStore } from '../stores/drawer-menu-store';

interface IDrawerMenuProps {
  drawerMenuStore?: DrawerMenuStore;
}

@inject('drawerMenuStore')
@observer
class DrawerMenu extends React.Component<IDrawerMenuProps> {

  public render() {
    const {onOpen, onClose, isOpen} = this.props.drawerMenuStore!;
    return (
      <div>
        <SwipeableDrawer
          anchor="left"
          open={isOpen()}
          onClose={onClose}
          onOpen={onOpen}
        >
          <div tabIndex={0} role="button">
            {this.renderMenu()}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }


  private renderMenu() {
    const {getMenu, handleClick, isExpanded} = this.props.drawerMenuStore!;
    return (
      <List component="nav" disablePadding={true}>
        {
          getMenu().map((item, key) => {
            const onClick = () => handleClick(key);
            return (
              <div key={key}>
                <ListItem button={true} onClick={onClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                  {isExpanded(key) ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {this.renderSubMenu(key, item.subMenu)}
                <Divider />
              </div>
            );
          })
        }
      </List>
    );
  }

  private renderSubMenu(parentMenuKey: number, items: any[]) {
    
    const {onMenuSelection, isExpanded} = this.props.drawerMenuStore!;
    const expand = isExpanded(parentMenuKey);
    return (
      <Collapse in={expand} timeout="auto" unmountOnExit={true}>
        <List component="div">
          {
            items.map((item, key) => {
              const onClick = () => onMenuSelection(item.path);
              return (
                <div key={key}>
                  <ListItem button={true} onClick={onClick}>
                    <ListItemText inset={true} primary={item.label} />
                  </ListItem>
                </div>
              );
            })
          }
        </List>
      </Collapse>
    );
  }
}

export default DrawerMenu;