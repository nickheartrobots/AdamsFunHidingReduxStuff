export const REGISTER_GLOBAL_LOADER = "REGISTER_GLOBAL_LOADER";
export const UNREGISTER_GLOBAL_LOADER = "UNREGISTER_GLOBAL_LOADER";

const initialState = []

export const getLoaderKey = (url) => {
    return `${new Date().getTime()} | ${url} | ${Math.random()}`;
}

export const registerLoading = (key) => ({
    type: REGISTER_GLOBAL_LOADER,
    key
});

export const unregisterLoading = (key) => ({
    type: UNREGISTER_GLOBAL_LOADER,
    key
});

function GlobalLoaderReducer(state = initialState, action){
    switch(action.type){
        case REGISTER_GLOBAL_LOADER:
            return [...state, action.key];
        case UNREGISTER_GLOBAL_LOADER:
            return state.filter(key => key !== action.key);
        default:
            return state;
    }
}

export const isLoadingSelector = (state) => {
    return state.GlobalLoaderReducer.length > 0;
}

export default GlobalLoaderReducer;

