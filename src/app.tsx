import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import { AppHome } from './app-home';
import { configStore } from './features/config';
import { consumptionStore } from './features/load-balancer/stores/consumption-store';
import { drawerMenuStore } from './features/navigation/stores/drawer-menu-store';
import { topNavStore } from './features/navigation/stores/top-nav-store';
import { simulationStore } from './features/neighbourhood-simulation/stores/simulation-store';
import Login from './features/security/components/login';
import { authStore } from './features/security/stores/auth-store';

@observer
export class App extends React.Component {

    public render () {
        const stores = { 
            authStore,
            configStore,
            consumptionStore,
            drawerMenuStore,
            simulationStore,
            topNavStore 
        };

        return (
            <Provider {...stores}>
                {authStore.isAuthenticated ? <AppHome/> : <Login/>}
            </Provider>
        );
    }
}