import { combineReducers } from "redux";

import {
  currentQuestionReducer,
  questionsReducer,
} from "app/routes/Dashboard/actions";

const rootReducer = combineReducers({
  questions: questionsReducer,
  currentQuestion: currentQuestionReducer,
});

export default rootReducer;
