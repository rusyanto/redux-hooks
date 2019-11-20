import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { INCREMENT } from '../../redux/actionTypes';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter.num}</h1>
      <button
        onClick={() =>
          dispatch({
            type: INCREMENT,
            payload: { step: 1 }
          })
        }
      >
        Increment
      </button>
    </div>
  );
}

export default App;
