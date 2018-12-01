import * as React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {AppConstants, CONTEXT} from './constants';
import TopNavBar from './features/navigation/components/top-nav-bar';

import LoadBalancer from './features/load-balancer/components/load-balancer';
import mainContainer from './features/neighbourhood-simulation/components/main-container';
import Scene from './features/neighbourhood-simulation/components/scene/scene';
import Login from './features/security/components/login';
import history from './navigation-history';

export class AppHome extends React.Component {
    public render () {
        return (
            <Router history={history}>
                <div>
                    
                    <Switch>
                        <Route exact={true} path={CONTEXT} component={Login}/>
                        <Route path={AppConstants.CLIENT_URLS.NEIGHBOURHOOD_SIMULATION} component={mainContainer}/>
                        <Route path={AppConstants.CLIENT_URLS.LOAD_BALANCER} component={LoadBalancer}/>
                        <Route path={AppConstants.CLIENT_URLS.SCENE} component={Scene}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}