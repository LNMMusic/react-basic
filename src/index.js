// GLOBAL
import React from 'react'; import ReactDOM from 'react-dom';
// CSS                                                        ->  HTML head
import 'normalize.css'; import './index.css';


// APP [Component]                                            ->  HTML body root
import App from './App';

// RENDER [root]
const target = document.getElementById('root');
ReactDOM.render(
  <App />,
  target
);