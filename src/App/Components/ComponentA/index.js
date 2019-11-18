import React, {
    // useEffect
} from 'react';
import {
    // useDispatch,
    useSelector
} from 'react-redux';

// import { getComponentAStuff } from './Actions';

function ComponentA(){
    // const dispatch = useDispatch();
    const isLoading = useSelector(state => state.ComponentA.isLoading);
    
    // useEffect(() => {
    //     dispatch(getComponentAStuff());
    // }, []);

    return (
        !isLoading
            ? <div style={{ height: 100, width: 100, backgroundColor: "red" }}>ComponentA</div>
            : null
    );
}


export default ComponentA;