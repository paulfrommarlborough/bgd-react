import './App.css';
import Navbar from './NavBar';
import Home from './Pages/Home';
import Group from './Pages/Group';
import Self from './Pages/Self';
import Self1 from './Pages/Self1';
import Self2 from './Pages/Self2';
import About from './Pages/About';

import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>    
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/group" element={<Group />}></Route>
        <Route path="/self" element={<Self />}></Route>
        <Route path="/self1" element={<Self1  />}></Route>
        <Route path="/self2" element={<Self2 />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App;
