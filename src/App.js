import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailProvince from './pages/DetailProvince';
import DetailDestination from './pages/DetailDestination';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detailprovince/:id' element={<DetailProvince />} />
        <Route path='/detaildestination' element={<DetailDestination />} />
      </Routes>
    </Router>
  );
}

export default App;