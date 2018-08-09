import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
const startApp = () => {
	ReactDOM.render(
	  <App />,
	  document.getElementById('root')
	);
}

interface ICustomWindow extends Window {
    cordova: any;
}

declare let window: ICustomWindow;

if (!window.cordova) {
    startApp();
} else {
    document.addEventListener('deviceready', startApp, false);
}
