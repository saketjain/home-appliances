import * as React from 'react';
import Clouds from './clouds';
import Ground from './ground';
import Sky from './sky';
import SunYellow from './sunYellow';

export default class Scene extends React.Component {
    public render() {
        return (
            <div>
                <Sky/>
                <Clouds/>
                <Ground/>
                <SunYellow/>
            </div>
        )
    }
}