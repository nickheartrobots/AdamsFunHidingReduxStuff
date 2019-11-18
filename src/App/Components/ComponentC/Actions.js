import axios from 'Utils/axios';

import {
    getLoaderKey,
    registerLoading,
    unregisterLoading
} from 'App/Components/GlobalLoader/Redux';

import {
    SET_C_IS_LOADING
} from './Reducer';

const setIsLoading = (isLoading) => ({
    type: SET_C_IS_LOADING,
    payload: isLoading
});

export const getComponentCStuff = () => async (dispatch) => {
    const url = 'https://api.wtf.com/bloodbath';
    const key = getLoaderKey();

    dispatch(setIsLoading(true));
    dispatch(registerLoading(key));
    const response = await axios.get(url);
    dispatch(unregisterLoading(key));
    dispatch(setIsLoading(false));
}