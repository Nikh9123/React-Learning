import "./index.css";

function StartScreen({onStart, dispatch}) {
   
  return (
    <div className="start">
      <h2 className="purples">Welcome to The CSE Quiz</h2>
      <h3 className="mint">Challenge Your Knowledge</h3>
      <button className="button-86" onClick={() => dispatch({type : "start"})}>Accept Challenge</button>
    </div>
  );
}

export default StartScreen;
