import initialState from './state.js';

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ACTIVE_BANNER_INDEX':
            return {
                ...state,
                activeBannerIndex: action.index
            };
        default:
            return state;
    }
}

export default reducer;
