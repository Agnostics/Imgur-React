let reducer = function(state, action) {
    switch (action.type) {
        case 'UPDATE_IMAGES':
            return Object.assign({}, state, {
                images: action.images
            })
        default:
            return state;
    }
};

export default reducer;
