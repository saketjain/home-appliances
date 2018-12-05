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
                <Sky/>
                <Night/>
                <Moon/>
                <Stars/>
                <Clouds/>
                <SunYellow/>
                <SunRed/>
                <Ground/>
            </div>
        )
    }
}