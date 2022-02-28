import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
// import rootSaga from './modules/rootSaga'
// import tron from '../../ReactotronConfig'

const initialState = {}

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
// const middlewares = [sagaMiddleware]

// const enhancer = __DEV__
//   ? compose(applyMiddleware(...middlewares), tron.createEnhancer())
//   : applyMiddleware(...middlewares)

const store = createStore(rootReducer, initialState)


export default store
