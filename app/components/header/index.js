import React, {Component} from 'react';
import style from './header.scss';
import MainNav from './MainNav';

export default class Header extends Component {
    render() {
        return (
            <div id="topbar">
                <div className="header-center">
                    < MainNav/>
                </div>
            </div>
        );
    }
}
