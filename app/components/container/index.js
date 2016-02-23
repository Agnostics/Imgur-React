import React, {Component} from 'react';
import style from './container.scss';
import Sorting from './Sorting';

export default class Container extends Component {
    render() {
        return (
            <div className='container'>
                <div className='center'>
                    <Sorting/>
                    <div className='panel-bg'></div>
                </div>
            </div>
        );
    }
}
