export const SET_C_IS_LOADING = "SET_IS_LOADING";

const initialState = {
    isLoading: true
}

function ComponentCReducer(state = initialState, action){
    switch(action.type){
        case SET_C_IS_LOADING:
            return {...state, isLoading: action.payload };
        default:
            return state;
    }
}

export default ComponentCReducer;