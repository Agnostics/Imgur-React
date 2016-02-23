import React, {Component} from 'react';
import style from './app.scss';
import Header from '../header';
import Container from '../container';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container/>
            </div>
        );
    }
}
