import { createStore } from 'redux';
import reducers from './reducers';
import { Articles } from 'api';

const isDev = process.env.NODE_ENV !== 'production';

const devMiddleware = window.devToolsExtension && isDev ? window.devToolsExtension() : f => f

const configureStore = () => createStore(reducers, devMiddleware);

export default configureStore;
