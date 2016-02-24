import env from '../../env';
let id = env.CLIENT_ID;

let actions = {

    updateImages: function(images) {
        return {
            type: 'UPDATE_IMAGES',
            images: images
        };
    },

    fetchImages: function(filters) {
        return (dispatch) => {

            fetch('https://api.imgur.com/3/gallery' + filters, {
                headers: {
                    'Authorization': 'Client-ID ' + id
                }
            }).then((res) => {
                return res.json();
            }).then((json) => {
                dispatch(actions.updateImages(json.data));
            });
        };
    }


};

export default actions;
