import React, {
    // useEffect
} from 'react';
import {
    // useDispatch,
    useSelector
} from 'react-redux';

import {
    // getComponentBStuff
} from './Actions';

function ComponentB(){
    // const dispatch = useDispatch();
    const isLoading = useSelector(state => state.ComponentB.isLoading);

    // useEffect(() => {
    //     dispatch(getComponentBStuff());
    // }, []);

    return (
        !isLoading
            ? <div style={{ height: 100, width: 100, backgroundColor: "Green" }}>ComponentB</div>
            : null
    );
}


export default ComponentB;