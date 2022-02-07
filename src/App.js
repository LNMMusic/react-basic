import {BrowserRouter as Router, Route} from 'react-router-dom';
// pages
import HomePage from './pages/HomePage';
// components







// APP [Component]
function App() {
  return (
    <Router>
      <div className="App">
        {/* Root */}
        <Route path="/" exact component={HomePage}/>


      </div>
    </Router>
  );
}

export default App;