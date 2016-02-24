import React, {Component} from 'react';
import { Link } from 'react-router';


export default class Images extends Component {

componentDidMount(){
	console.log('what');

	this.props.fetchImages('/user/time');
}

    render() {
        return (
            <div className='images-group'>
				{this.props.images.map((image) => {
					let link = 'http://i.imgur.com/' + image.id + 'h.jpg';
					let temp = '/img/' + image.id;
					return (
						<div key={image.id}>
						<Link to={temp}><img src={link}/></Link>
					</div>

					);
				})}
            </div>

        );
    }

}
