import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  RootReducer,
  composerEnhancer(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;
