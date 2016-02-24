'use strict';
import env from '../../env';

let rootUrl = 'https://api.imgur.com/3/';
let id = env.CLIENT_ID;

var ImageSource =  {
    fetch: function(url) {
        return fetch(rootUrl + 'gallery/hot/viral', {
            headers: {
                'Authorization': 'Client-ID ' + id
            }
        }).then((response) => {
            return response.json();
        }).then((json) => {
			return(json.data);
		});
    }
};


module.exports = ImageSource;
