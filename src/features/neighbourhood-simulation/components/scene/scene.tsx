import * as React from 'react';
import Clouds from './clouds';
import Ground from './ground';
import Moon from './moon';
import Night from './night';
import Sky from './sky';
import Stars from "./stars";
import SunRed from './sunRed';
import SunYellow from './sunYellow';

export default class Scene extends React.Component {
    public render() {
        return (
            <div>
                <Sky schedule={{sceneDuration: 24, sceneStart: 0, paused:false}}/>
                <Night schedule={{sceneDuration: 24, sceneStart: 0, paused:false}}/>
                <Moon schedule={{sceneDuration: 24, sceneStart: 0, paused:false}}/>
                <Stars schedule={{sceneDuration: 24, sceneStart: 0, paused:false}}/>
                <Clouds/>
                <SunYellow schedule={{sceneDuration: 24, sceneStart: 0, paused:false}}/>
                <SunRed schedule={{sceneDuration: 24, sceneStart: 0, paused:false}}/>
                <Ground/>
            </div>
        )
    }

}