import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
  const middleware = composeEnhancers(applyMiddleware(thunk));
  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
