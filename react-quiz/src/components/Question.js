import Options from "./Options";

function Question({ index, Question, dispatch, answer }) {
  console.log(Question);
  return (
    <div>
      <h2 className="text-floating">Your Questions No.{index + 1}</h2>
      <div class="question-container">
        <h1 class="question-header">{Question.question}</h1>
      </div>
      <Options Question={Question} dispatch={dispatch} answer={answer}/>
    </div>
  );
}

export default Question;
