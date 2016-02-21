import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import style from './app.scss';
import Header from '../header'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}
