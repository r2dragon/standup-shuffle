import Home from "./components/home.js"
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  
  
  return (
    <Router basename="/" hashtype="slash">
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
