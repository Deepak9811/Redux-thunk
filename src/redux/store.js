import { createStore,applyMiddleware,compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,{},composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store