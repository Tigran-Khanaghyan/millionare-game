import { combineReducers } from "redux";

import { questionsReducer } from "app/routes/Dashboard/actions";

const rootReducer = combineReducers({
  questions: questionsReducer,
});

export default rootReducer;
