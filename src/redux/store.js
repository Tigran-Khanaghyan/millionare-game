import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const initialState = {
  questions: [
    {
      question: "Which one is the looping structure in JavaScript?",
      rightAnswer: 3,
      answers: ["var", "switch", "with", "for"],
    },
    {
      question: "Which one is the programming language?",
      rightAnswer: 1,
      answers: ["S++", "Java Script", "Windows Script", "Photoshop"],
    },
    {
      question: "Which one is not an operating system?",
      rightAnswer: 0,
      answers: ["Tesla", "Microsoft Windows", "macOs", "Linux"],
    },
    {
      question: "... is the brain of any computer system.",
      rightAnswer: 2,
      answers: ["GPS", "ABS", "CPU", "RAM"],
    },
    {
      question: "One of them is not an OSI model layer.",
      rightAnswer: 2,
      answers: ["Application", "Network", "Protocol", "Session"],
    },
    {
      question: "ASCII stands for",
      rightAnswer: 0,
      answers: [
        "American standard code for information interchange",
        "American security code for information interchange",
        "Albanian scientific code for information interchange",
        "American Scientific code for information interchange",
      ],
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
