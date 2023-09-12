import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import ClickerGame from './pages/clicker';
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/clicker" element={<ClickerGame/>}/>
    </Routes>
  </Router>    
  );
}

export default App;
