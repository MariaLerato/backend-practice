import React, { useState } from 'react';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import { AddUser } from './Components/addUser';
import { Login } from './Components/Login';
import { UserList } from './Components/userList';
import {Users} from './Components/Users'
function App() {
  const [user,setUser] = useState(null)
  
  // async function login(user = null){
  //   setUser(user)
  // }
  // async function logout(){
  //   setUser(null)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path=element={ <Login />}/> */}
          <Route exact path = {'/userList'} element={<UserList/>}/>
          <Route path='/'  element={ <Users  />}/>
          <Route path='/addUser' element={ <AddUser />}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
