function Question({ index, Question }) {
  console.log(Question);
  return (
    <div>
      <h2 className="text-floating">Your Questions No.{index + 1}</h2>
      <div class="question-container">
  <h1 class="question-header">{Question.question}</h1>
</div>      <div className="options">
        {Question.options.map((option) => (
          <button className="glow-on-hover" type="button">{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Question;
