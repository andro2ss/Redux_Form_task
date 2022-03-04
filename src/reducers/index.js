import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const allReducers = combineReducers({ form: reduxFormReducer });

export default allReducers;
