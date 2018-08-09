export const CONTEXT = '/mobile';
export const AppConstants = {
    CLIENT_URLS: {
        ALERTS: CONTEXT + '/alerts',
        DEPOSIT_SUMMARY: CONTEXT + '/deposit/summary',
        MUTUAL_FUND_SUMMARY: CONTEXT + '/mutualFund/summary',
        PORTFOLIO_EDIT: CONTEXT + '/portfolio/edit',
        PORTFOLIO_LIST: CONTEXT + '/portfolio/list',
        PORTFOLIO_SUMMARY: CONTEXT + '/portfolio/summary',
        SETTINGS: CONTEXT + '/settings',
        STOCK_PERFORMANCE: CONTEXT + '/stock/performance',
        STOCK_PROFIT_LOSS: CONTEXT + '/stock/profitLoss',
        STOCK_SUMMARY: CONTEXT + '/stock/summary'
    },
    SERVER_URLS: {
        DEPOSIT_SUMMARY: '/portfolio/{0}/deposits/summary',
        GENERATE_TOKEN: '/security/generateToken',
        MUTUAL_FUND_DETAIL: '/portfolio/{0}/summary/funds',
        MUTUAL_FUND_SUMMARY: '/portfolio/{0}/mutualFunds/summary',
        PORTFOLIO_LIST: '/portfolio/list/{0}',
        PORTFOLIO_SUMMARY: '/portfolio/{0}/summary',
        STOCK_DETAIL: '/portfolio/{0}/stocks/details',
        STOCK_PERFORMANCE: '/portfolio/{0}/stocks/performance',
        STOCK_PROFIT_LOSS: '/portfolio/{0}/stocks/profitLoss',
        STOCK_SUMMARY: '/portfolio/{0}/stocks/summary'
    }
};
