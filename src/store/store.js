import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState={}) {
    return legacy_createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
      );
}