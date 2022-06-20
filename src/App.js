
import './App.css';

// import { useState } from 'react'
import read from './components/read'
import Create from './components/create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  // const [name, setName] = useState('');
  return (
    <Router>
      <div className="main">
        <h2>
          Hello
        </h2>
        <div>
          Add component here
        </div>

        <Routes>
          <Route path='/create' element={<Create />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
