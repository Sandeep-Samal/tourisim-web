import { combineReducers } from "redux";
import commonReducer from "../Reducer/CommonReducer";

const rootReducer = combineReducers({
  commonReducer: commonReducer,
});

export default rootReducer;
