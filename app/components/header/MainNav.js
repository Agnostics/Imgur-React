import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import style from './header.scss';
import img from './../../images/logo.png';

export default class MainNav extends Component {
    render() {
        return (
			<div className="main-nav">
                    <div className="header-logo"><img src={img}/></div>
                        <i className="fa fa-bars"></i>
			</div>
        );
    }
}
