import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { ContextMenuStore } from '../stores/context-menu-store';

interface IContextMenuProps {
  contextMenuStore?: ContextMenuStore;
}

interface IContextMenuStore {
  anchorElement?: HTMLElement;
}

@inject('contextMenuStore')
@observer
export class ContextMenu extends React.Component<IContextMenuProps, IContextMenuStore> {

  constructor(props: IContextMenuProps) {
    super(props);
    this.state = {
      anchorElement: undefined
    };
  }

  public render() {
    const menuItems = this.props.contextMenuStore!.getContextMenu();
    const anchorEl = this.state.anchorElement;
    const open = Boolean(anchorEl);
    return (
      <div>
        <IconButton
          id='context-menu-icon'
          aria-owns={open ? 'context-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleRightMenu}
          color="inherit"
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="context-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleRightMenuClose}
        >
        {
          menuItems.map((item, key) => {
            const onClick = () => this.handleSelection(item.path);
            return (
              <MenuItem key={key} onClick={onClick}>{item.label}</MenuItem>
            );
          })
        }
        </Menu>
      </div>
    );
  }

  private handleRightMenu = (event: any) => {
    this.setState({ anchorElement: event.currentTarget });
  };

  private handleRightMenuClose = () => {
    this.setState({ anchorElement: undefined });
  }

  private handleSelection = (path: string) => {
    this.handleRightMenuClose();
    this.props.contextMenuStore!.onMenuSelection(path);
  }
}

