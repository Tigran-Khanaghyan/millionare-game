import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const initialState = {
  questions: [
    {
      question: "Which is the looping structure in JavaScript?",
      rightAnswer: 3,
      answers: ["var", "switch", "with", "for"],
    },
    {
      question: "Which is the programming language?",
      rightAnswer: 1,
      answers: ["S++", "Java Script", "Windows Script", "Photoshop"],
    },
  ],
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
