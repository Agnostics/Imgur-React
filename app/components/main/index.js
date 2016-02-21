import React, {Component} from 'react';
import {Link} from 'react-router';
import style from './app.scss';
import Header from '../header';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}
