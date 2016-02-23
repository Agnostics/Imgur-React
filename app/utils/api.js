'use strict';
import env from '../../env';

let rootUrl = 'https://api.imgur.com/3/';
let id = env.CLIENT_ID;

let api = {
    get: function(url) {
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID ' + id
            }
        }).then((response) => {
            console.log(response);
        });
    }
};

export default api;
