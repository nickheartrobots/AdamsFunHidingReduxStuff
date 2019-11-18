import React, {
    // useEffect
} from 'react';
import {
    // useDispatch,
    useSelector
} from 'react-redux';

// import { getComponentCStuff } from './Actions';

function ComponentC(){
    // const dispatch = useDispatch();
    const isLoading = useSelector(state => state.ComponentC.isLoading);

    // useEffect(() => {
    //     dispatch(getComponentCStuff());
    // }, []);

    return (
        !isLoading
            ? <div style={{ height: 100, width: 100, backgroundColor: "blue" }}>ComponentC</div>
            : null
    );
}


export default ComponentC;