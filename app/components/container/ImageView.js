import React, {Component} from 'react';

export default class ImageView extends Component {


    render() {
		let link = 'http://i.imgur.com/' + this.props.params.id + '.jpg';

        return (
            <div className="image-view">
				<div className='image-header'>
					<div className='post-title'>
						<h1>{this.props.images[this.props.params.obj].title}</h1>
						<h2>by {this.props.images[this.props.params.obj].account_url}</h2>
					</div>
				</div>
				<div><img src={link} /></div>
				{this.renderDesc()}
				<div className='image-stats'>Views: {this.props.images[this.props.params.obj].views} | Points: {this.props.images[this.props.params.obj].points}</div>
			</div>

		);




	}

	renderDesc (){
		if(this.props.images[this.props.params.obj].description !== null){
			return <div className='image-desc'>{this.props.images[this.props.params.obj].description} </div>;
		}else{
			return;
		}
	}

}
