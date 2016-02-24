import React, {Component} from 'react';
import style from './container.scss';
import Sorting from './Sorting';
import Images from './Images';

export default class Container extends Component {

    render() {
        return (
            <div className='container'>
                <div className='center'>
                    <Sorting/>
					<div className='panel-bg'>
						<Images fetchImages={this.props.fetchImages} images={this.props.images}/>
					</div>
                </div>
            </div>
        );
    }




}
