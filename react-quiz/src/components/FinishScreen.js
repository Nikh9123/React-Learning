import React from "react";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
    
    
  const percentage = ((points / maxPossiblePoints) * 100).toFixed(2);
  let emoji ;
    if(percentage === 100) emoji = "🥳";
    else if(percentage >= 80) emoji = "😎";
    else if(percentage >= 60) emoji = "😐";
    else emoji = "😢";
  return (
    <>
    <p className="result">
        <span>{emoji}</span>
      Y ou scored <strong> {points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
    <p className="highscore">(Highscore: {highscore} score)</p>
    <button className="btn btn-ui" style={{ marginBottom: "12px" }}
    onClick={()=>dispatch({type:"restart"})}
    >Restart</button>
    </>
  );
}

export default FinishScreen;
