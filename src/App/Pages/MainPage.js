import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import ComponentA from '../Components/ComponentA';
import ComponentB from '../Components/ComponentB';
import ComponentC from '../Components/ComponentC';

// actions
import { getComponentAStuff } from '../Components/ComponentA/Actions';
import { getComponentBStuff } from '../Components/ComponentB/Actions';
import { getComponentCStuff } from '../Components/ComponentC/Actions';

function MainPageLoadingSelector(state) {
    return state.ComponentA.isLoading
        || state.ComponentB.isLoading
        || state.ComponentC.isLoading
}

function MainPage(){
    const isLoading = useSelector(state => MainPageLoadingSelector(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComponentAStuff());
        dispatch(getComponentBStuff());
        dispatch(getComponentCStuff());
    }, []);

    return (
        <div>
            { !isLoading && <>
                <ComponentA />
                <ComponentB />
                <ComponentC />            
            </> }
        </div>
    );
}

export default MainPage;