import axios from "Utils/axios";

import {
    getLoaderKey,
    registerLoading,
    unregisterLoading
} from 'App/Components/GlobalLoader/Redux';

import {
    SET_A_IS_LOADING
} from './Reducer';

const setIsLoading = (isLoading) => ({
    type: SET_A_IS_LOADING,
    payload: isLoading
});

export const getComponentAStuff = () => async (dispatch) => {
    const url = 'https://api.wtf.com/shitstorm';
    const key = getLoaderKey(url);

    dispatch(setIsLoading(true));
    dispatch(registerLoading(key));
    const response = await axios.get(url);
    dispatch(unregisterLoading(key));
    dispatch(setIsLoading(false));
}