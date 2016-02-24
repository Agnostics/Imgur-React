import React, {Component} from 'react';

export default class Images extends Component {

componentWillMount(){
	this.props.fetchImages('/user/time');

}

    render() {
        return (
            <div className='images-group'>
				{this.props.images.map((image) => {
					let link = 'http://i.imgur.com/' + image.id + 'h.jpg';
					return (
						<div key={image.id}>
						<a href={link}><img src={link}/></a>
					</div>

					);
				})}
            </div>

        );
    }

}
