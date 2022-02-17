import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSagas from "./sagas";
import appReducers from "./app/reducers";
import homepageReducers from "./homepage/reducers";
import newsReducers from "./news/reducers";
import eventsReducers from "./events/reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  combineReducers({
    app: appReducers,
    homepage: homepageReducers,
    news: newsReducers,
    events: eventsReducers
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSagas);

export default store