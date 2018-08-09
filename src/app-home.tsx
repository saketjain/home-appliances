import * as React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {CONTEXT} from './constants';
import BottomNavigation from './features/navigation/components/bottom-navigation';
import TopNavBar from './features/navigation/components/top-nav-bar';

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
                    </Switch>
                    <BottomNavigation/>
                </div>
            </Router>
        );
    }
}