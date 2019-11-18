import React from 'react';
import { useSelector } from 'react-redux';

import { isLoadingSelector } from './Redux';
import { makeStyles } from '@material-ui/core/styles';

import { LinearProgress } from '@material-ui/core'

const useClasses = makeStyles(theme => ({
    loading: {
		width: "100%",
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: theme.zIndex.appBar + 1
	}
}));

function GlobalLoader(){
    const classes = useClasses();
    const isLoading = useSelector(state => isLoadingSelector(state));

    return(
        isLoading
            ? <div className={classes.loading}>
                <LinearProgress />
            </div>
            : null
    );
}

export default GlobalLoader;