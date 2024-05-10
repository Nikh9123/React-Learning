import { act, useEffect, useReducer, useState } from "react";
// import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error.js"
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";

const APIKEY = "K0KB5o4wyeKBhu27IJae42plPTdBL8XrIyK1eApn ";
const intialState = {
  questions: [],

  //'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index : 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        questions: [],
        status: "error",
      };
    case "start":
      return {
        ...state, status : "active"
      }
    default:
      throw new Error("Action unknown❌");
  }
}

function App() {
  const [data, setdata] = useState([]);

  const [{ questions, status, index }, dispatch] = useReducer(reducer, intialState);

  const questionLength = questions.length ;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://quizapi.io/api/v1/questions?apiKey=${APIKEY}&limit=10`
      );

      const questions = await res.json();
      console.log(questions);
    }
    fetchData();
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => {
        dispatch({ type: "dataFailed" });
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen dispatch={dispatch} numOFQuestions={questionLength} />}
        {status === "active" && <Question index={index} Question={questions[index]}/>}
        </Main>
    </div>
  );
}

export default App;
