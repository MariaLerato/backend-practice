import React from 'react';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import { Login } from './Components/Login';
import { Users } from './Components/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         
          <Route exact path = {'/'} element={<Users/>}/>
          {/* <Route exact path={'/'} element={<Login/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
