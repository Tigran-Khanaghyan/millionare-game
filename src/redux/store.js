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
    {
      question:
        "You plan the coding of your project with JavaScript. When must the object references be ready?",
      rightAnswer: 1,
      answers: [
        "at compile time",
        "at run time",
        "at free time",
        "at debug time",
      ],
    },
    {
      question: "When you ping the loopback address, a packet is sent where?",
      rightAnswer: 2,
      answers: [
        "On the network",
        "through the loopback dongle",
        "Down through the layers of the IP architecture and then up the layers again",
        "through the OS architecture",
      ],
    },
    {
      question:
        "When a computer is first turned on or restarted, a special type of absolute loader is executed, called a",
      rightAnswer: 1,
      answers: [
        "Compile and Go loader",
        "Bootstrap loader",
        "Boot loader",
        "System loader",
      ],
    },
    {
      question: "Which one is not a hacking phase?",
      rightAnswer: 0,
      answers: [
        "Finding target",
        "Reconnaissance",
        "Gaining Access",
        "Clearing Track",
      ],
    },
    {
      question:
        "What will be the output of the JavaScript expression: {} + [] + {} + 1 ?",
      rightAnswer: 1,
      answers: [
        "[object Object][object Object][object Object][object Object]1",
        "'0[object Object]1'",
        "[object Object]0[object Object]1",
        "1",
      ],
    },
    {
      question: "When data is encapsulated, which is the correct order?",
      rightAnswer: 2,
      answers: [
        "Segment, data, packet, frame, bit",
        "Data, frame, packet, segment, bit",
        "Data, segment, packet, frame, bit",
        "Data, segment, frame, packet, bit",
      ],
    },
    {
      question:
        "A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is :",
      rightAnswer: 3,
      answers: ["1/4", "3/20", "7/15", "8/15"],
    },
    {
      question:
        "The _____ type of malware collects personal information and sends it to a third party.",
      rightAnswer: 1,
      answers: ["Worm", "Spyware", "Browser Hijacker", "Trojan"],
    },
    {
      question:
        "Which of the following registers is used to keep track of address of the memory location where the next instruction is located?",
      rightAnswer: 0,
      answers: [
        "	Program Counter",
        "Memory Data Register",
        "Memory Address Register",
        "Instruction Register",
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
