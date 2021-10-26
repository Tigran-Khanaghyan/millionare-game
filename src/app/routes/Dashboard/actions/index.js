import { createReducer } from "utils/reduxHelpers";

const ON_QUESTIONS = "ON_QUESTIONS";
const ON_CURRENT_QUESTION = "ON_CURRENT_QUESTION";

export const onSetQuestions = (payload) => ({ type: ON_QUESTIONS, payload });
export const onSetCurrentQuestion = (payload) => ({
  type: ON_CURRENT_QUESTION,
  payload,
});

const questionInitialState = [];
const currentQuestionInitialState = {};

const questionsHandlers = {
  [ON_QUESTIONS]: (state, action) => {
    state.push(action.payload);
    return state;
  },
};
const currentQuestionHandlers = {
  [ON_CURRENT_QUESTION]: (state, action) => {
    state = action.payload;
    return state;
  },
};

export const questionsReducer = createReducer(
  questionInitialState,
  questionsHandlers
);
export const currentQuestionReducer = createReducer(
  currentQuestionInitialState,
  currentQuestionHandlers
);
