import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UnitState from './unitstate/StateOfReact'
import Exercise from './Exercise/ExOne'
import ExerciseTwo from './Exercise/ExTwo'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <div>
  <App /><hr/><UnitState /><hr/><Exercise /><hr/><ExerciseTwo/>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
