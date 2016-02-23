import React, {Component} from 'react';
import img from './../../images/logo.png';

export default class Navigation extends Component {
    render() {
        return (
            <div className="main-nav">
                <div className="header-logo"><img src={img}/></div>
                <div className='hamburger'><i className="fa fa-bars"></i></div>
				<div className="header-login">
					<a href="#">sign in</a>
					<a href="#">sign up</a>
				</div>
            </div>
        );
    }
}
