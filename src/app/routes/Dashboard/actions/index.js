import { createReducer } from "utils/reduxHelpers";

const ON_QUESTIONS = "ON_QUESTIONS";

export const onSetQuestions = (payload) => ({ type: ON_QUESTIONS, payload });

const questionInitialState = [];

const questionsHandlers = {
  [ON_QUESTIONS]: (state, action) => {
    state.push(action.payload);
    return state;
  },
};

export const questionsReducer = createReducer(
  questionInitialState,
  questionsHandlers
);
