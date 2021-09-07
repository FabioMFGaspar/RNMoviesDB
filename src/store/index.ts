/* istanbul ignore file */
import {createStore} from 'redux';
import rootReducer, {initialState} from './reducers';

export const configureStore = () => createStore(rootReducer, initialState);

export default configureStore;
