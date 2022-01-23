 import { createStore, applyMiddleware, combineReducers } from 'redux';
import eventReducer from './reducers/eventReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    eventReducer,
});

 const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;