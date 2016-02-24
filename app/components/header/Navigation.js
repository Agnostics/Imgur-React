import React, {Component} from 'react';
import img from './../../images/logo.png';
import { Link } from 'react-router';


export default class Navigation extends Component {
    render() {
        return (
            <div className="main-nav">
                <div className="header-logo"><Link to='/'><img src={img}/></Link></div>
                <div className='hamburger'><i className="fa fa-bars"></i></div>
				<div className="header-login">
					<a href="#">sign in</a>
					<a href="#">sign up</a>
				</div>
            </div>
        );
    }
}
