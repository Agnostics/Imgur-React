import React, {Component} from 'react';
import { Link } from 'react-router';


export default class Images extends Component {

componentWillMount(){
	this.props.fetchImages('/hot/viral');
}

    render() {
        return (
            <div className='images-group'>
				{this.props.images.map((image, index) => {
					let link = 'http://i.imgur.com/' + image.id + 'h.jpg';
					let temp = '/img/' + image.id + '/' + index;
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
