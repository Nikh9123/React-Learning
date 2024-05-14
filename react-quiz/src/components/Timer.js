import React, { useState, useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]); // Empty dependency array ensures effect runs only once on mount

  return <div className="timer">
    {
        //convert seconds to minutes and seconds
        `${Math.floor(secondsRemaining / 60)}:${secondsRemaining % 60 < 10 ? `0${secondsRemaining % 60}` : secondsRemaining % 60}`
    }
  </div>;
}

export default Timer;
