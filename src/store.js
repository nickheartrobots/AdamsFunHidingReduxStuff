import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// import reducers
import ComponentA from "App/Components/ComponentA/Reducer";
import ComponentB from "App/Components/ComponentB/Reducer";
import ComponentC from "App/Components/ComponentC/Reducer";
import GlobalLoaderReducer from 'App/Components/GlobalLoader/Redux';

const reducers = combineReducers({
  ComponentA,
  ComponentB, 
  ComponentC,
  GlobalLoaderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      logger
    )));

export default store;
