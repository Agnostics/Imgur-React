import React, {Component} from 'react';
import style from './header.scss';
import Navigation from './Navigation';

export default class Header extends Component {
    render() {
        return (
            <div id="topbar">
                <div className="header-center">
                    <Navigation/>
                </div>
            </div>
        );
    }
}
