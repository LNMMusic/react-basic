// Global
import React from 'react'; import ReactDOM from 'react-dom';
import 'normalize.css'; import './index.css';


// APP [Component]
import App from './App';

// RENDER [root]
const target = document.getElementById('root');
ReactDOM.render(
  <App />,
  target
);