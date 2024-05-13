// function Options({ Question, dispatch, answer }) {
//   console.log(answer)
//   return (
//     <div>
//       <div className="options">
//         {Question.options.map((option, index) => (
//           <button
//             className={`glow-on-hover ${index === answer ? "answer" : ""}
//             ${index === Question.correctOption ? "correct" : "wrong"} `}
//             type="button"
//             key={option}
//             onClick={() => dispatch({ type: "newAnswer", payload: index })}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Options;

function Options({ Question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div>
      <div className="options">
        {Question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === Question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } `}
            disabled={hasAnswered}
            type="button"
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
