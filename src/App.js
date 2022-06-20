
import './App.css';

// import { useState } from 'react'
import Read from './components/read'
import Create from './components/create';
import Update from './components/update'

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
 <div>
        <Routes>
          <Route path='/create' element={<Create />} />

      
          <Route  path='/read' element={<Read />} />
          <Route  path='/update' element={<Update />} />
        </Routes>
 </div>

      </div>
    </Router>
  );
}

export default App;
