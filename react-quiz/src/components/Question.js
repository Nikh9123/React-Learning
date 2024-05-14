import Options from "./Options";

function Question({ index, Question, dispatch, answer }) {
  console.log(Question);
  return (
    <div>
      <h3 className="text-floating">Your Questions No.{index + 1}</h3>
      <div class="question-container">
        <h3 class="question-header">{Question.question}</h3>
      </div>
      <Options Question={Question} dispatch={dispatch} answer={answer}/>
    </div>
  );
}

export default Question;
