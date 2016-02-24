import alt from '../alt';
import ImageSource from '../sources/ImageSource'

class ImageActions {

    updateImages(images) {
        return images;
    }

    fetchImages() {

        return (dispatch) => {
            dispatch();
            ImageSource.fetch()
                .then((images) => {
                    this.updateImages(images)
                })
                .catch((errorMessage) => {
                    this.imagesFailed(errorMessage);
                });
        };
    }

	imagesFailed(errorMessage) {
		return errorMessage;
	}

}



module.exports = alt.createActions(ImageActions)
