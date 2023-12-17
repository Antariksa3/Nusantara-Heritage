import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailProvince from './pages/DetailProvince';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<DetailProvince />} />
      </Routes>
    </Router>
  );
}

export default App;