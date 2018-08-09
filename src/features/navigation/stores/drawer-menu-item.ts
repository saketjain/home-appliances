import {AppConstants} from '../../../constants';

const portfolioSubMenu = [
  {
    component: null,
    label: 'Summary',
    path: AppConstants.CLIENT_URLS.PORTFOLIO_SUMMARY
  }     
];

export const menu = [
  {
    label: 'Home',
    subMenu: portfolioSubMenu
  },
  {
    label: 'Neighbourhood',
    subMenu: []
  },  
  {
    label: 'Settings',
    subMenu: []
  }  
];