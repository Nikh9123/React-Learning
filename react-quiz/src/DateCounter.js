import { useReducer, useState } from "react";


const initialState = { count : 0, step : 1 } ; 

function reducer(state, action){
  console.log("=======================>>>>>>>",state)//valof current state
  console.log("=======================>>>>>>>>>>>", action) //aave the value of dispatch function
  // if(action.type === "inc") return state + 1 ;
  // if(action.type === "dec") return state - 1 ;

  // if(action.type === "setCount") return action.payload ;

   switch(action.type){
    case "dec" :
      return {...state, count : state.count - state.step} ;
    case "inc" :
      return {...state, count : state.count + state.step} ;
    case "setStep" :
      return {...state, step : action.payload}
    case "setCount" :
      return {...state, count : action.payload } ;
    case "reset" :
      // return {...state, count : Number(0) , step : Number(1)}
      return initialState ;
    default :
    throw new Error("Unknown Action")
   }

}

function DateCounter() {
  // const [step, setStep] = useState(1);
  // const[count, setCount] = useState(0);
 
  const[{count, step}, dispatch] = useReducer(reducer, initialState) ;
  
 
  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type : "dec"});
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };
  
  const inc = function () {
    dispatch({type :"inc"}) ;
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({type : "setCount", payload : Number(e.target.value)}) ;
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({type : "setStep", payload : Number(e.target.value)})
  };

  const reset = function () {
    // setCount(0);

    // dispatch({type : "setCount", payload : Number(0)})
    // dispatch({type : "setStep", payload : Number(1)})

    dispatch({type :"reset"})
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
