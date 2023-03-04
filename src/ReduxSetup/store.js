import { applyMiddleware, createStore } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./RootReducer";

const composeEnhancers =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancers = [applyMiddleware(thunk)];
const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
