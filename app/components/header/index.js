import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import style from './header.scss';
import img from './../../images/logo.png';
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
