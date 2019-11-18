export const SET_B_IS_LOADING = "SET_B_IS_LOADING";

const initialState = {
    isLoading: true
}

function ComponentBReducer(state = initialState, action){
    switch(action.type){
        case SET_B_IS_LOADING:
            return {...state, isLoading: action.payload };
        default:
            return state;
    }
}

export default ComponentBReducer;