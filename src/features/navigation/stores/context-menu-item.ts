import {AppConstants} from '../../../constants';

export const portfolioContextMenu = [
  {
    label: 'Summary',
    path: AppConstants.CLIENT_URLS.PORTFOLIO_SUMMARY
  },
  {
    label: 'Switch',
    path: AppConstants.CLIENT_URLS.PORTFOLIO_LIST
  },
  {
    label: 'Edit',
    path: AppConstants.CLIENT_URLS.PORTFOLIO_EDIT
  },
  {
    label: 'Add',
    path: AppConstants.CLIENT_URLS.PORTFOLIO_EDIT
  }      
];

export const stockContextMenu = [
  {
    label: 'Summary',
    path: AppConstants.CLIENT_URLS.STOCK_SUMMARY
  },
  {
    label: 'Profit Loss',
    path: AppConstants.CLIENT_URLS.STOCK_PROFIT_LOSS
  },
  {
    label: 'Performance',
    path: AppConstants.CLIENT_URLS.STOCK_PERFORMANCE
  }      
];