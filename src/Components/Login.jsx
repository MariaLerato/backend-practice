import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = (props) => {
    const initialClientState = {
      name:"",
      id:"",
    }
    const [user,setUser] = useState(initialClientState)

    const handleInputChange = event=>{
      const {name,value} = event.target;
      setUser({...user,[name]:value});
    }
    const login = ()=>{
      props.login(user)
      props.history.push('/')
    }
  return <div>
      <input type={'text'} placeholder='Enter Name' initialValue={user.name} onChange={handleInputChange} />
      <input type={'password'} placeholder='Enter Password' value={user.id} onChange={handleInputChange}/>
     <button onClick={login}>Login</button>
   
  </div>;
};
// https://www.nicesnippets.com/blog/react-native-material-swipe-delete-example#:~:text=To%20use%20swipe%20delete%20you%20need%20to%20npm,terminal%20and%20jump%20into%20your%20project%20cd%20SwipeDelete