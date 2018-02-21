import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import { requestMiddleware } from './middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(requestMiddleware)),
)

export * from './actions';