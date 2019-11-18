export const SET_A_IS_LOADING = "SET_A_IS_LOADING";

const initialState = {
    isLoading: true
}

function ComponentAReducer(state = initialState, action){
    switch(action.type){
        case SET_A_IS_LOADING:
            return {...state, isLoading: action.payload };
        default:
            return state;
    }
}

export default ComponentAReducer;