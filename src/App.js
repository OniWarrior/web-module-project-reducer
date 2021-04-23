import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {useReducer} from 'react'
import {initialState} from './reducers/index'
import reducer from './reducers/index'

import {addOne,
       applyNumber,
       changeOperation,
       clearDisplay,
       setMemoryValue,
       applyMemoryValue,
       resetMemoryValue} from './actions/index'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

const handleApplyNumber = event=>{
  
  dispatch(applyNumber(parseInt(event.target.innerText)))
}

const handleOperationChange=event=>{
  
  dispatch(changeOperation(event.target.innerText))
}

const handleClearDisplay=event=>{
  dispatch(clearDisplay(event.target.innerText))
}

const handleSetMemoryValue= ()=>{
  dispatch(setMemoryValue(state.total))
}

const handleApplyMemoryValue=()=>{
  dispatch(applyMemoryValue(state.memory))
}

const handleResetMemoryValue=(event)=>{
  dispatch(resetMemoryValue(event.target.innerText))
}
  // const handleButtonOne=()  =>{
  //   dispatch(addOne());
  // }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleSetMemoryValue}/>
              <CalcButton value={"MR"} onClick={handleApplyMemoryValue}/>
              <CalcButton value={"MC"} onClick={handleResetMemoryValue}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={/*handleButtonOne*/ handleApplyNumber}/>
              <CalcButton value={2} onClick={/*handleButtonOne*/ handleApplyNumber}/>
              <CalcButton value={3} onClick={/*handleButtonOne*/ handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={/*handleButtonOne*/ handleApplyNumber}/>
              <CalcButton value={5} onClick={/*handleButtonOne*/ handleApplyNumber}/>
              <CalcButton value={6} onClick={/*handleButtonOne*/ handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={/*handleButtonOne*/ handleApplyNumber}/>
              <CalcButton value={8} onClick={/*handleButtonOne*/ handleApplyNumber}/>
              <CalcButton value={9} onClick={/*handleButtonOne*/ handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperationChange}/>
              <CalcButton value={"*"} onClick={handleOperationChange}/>
              <CalcButton value={"-"} onClick={handleOperationChange}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
