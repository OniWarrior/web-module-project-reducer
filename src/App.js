import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {useReducer} from 'react'
import {initialState} from './reducers/index'
import reducer from './reducers/index'

import {addOne,applyNumber} from './actions/index'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

const handleApplyNumber = event=>{
  
  dispatch(applyNumber(parseInt(event.target.innerText)))
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
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
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
