import React, {Component} from 'react';

export default class ImageView extends Component {


    render() {
		let link = 'http://i.imgur.com/' + this.props.params.id + '.jpg';

        return (
            <div>
				<img src={link} />
			</div>

		);
	}

}
