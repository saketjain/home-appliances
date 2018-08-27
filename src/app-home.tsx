import * as React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {AppConstants, CONTEXT} from './constants';
import BottomNavigation from './features/navigation/components/bottom-navigation';
import TopNavBar from './features/navigation/components/top-nav-bar';

import LoadBalancer from './features/load-balancer/components/load-balancer';
import mainContainer from './features/neighbourhood-simulation/components/main-container';
import Login from './features/security/components/login';
import history from './navigation-history';

export class AppHome extends React.Component {
    public render () {
        return (
            <Router history={history}>
                <div>
                    <TopNavBar/>
                    <Switch>
                        <Route exact={true} path={CONTEXT} component={Login}/>
                        <Route path={AppConstants.CLIENT_URLS.NEIGHBOURHOOD_SIMULATION} component={mainContainer}/>
                        <Route path={AppConstants.CLIENT_URLS.LOAD_BALANCER} component={LoadBalancer}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}