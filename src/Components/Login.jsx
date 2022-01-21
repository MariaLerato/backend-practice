import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
  return <div>
      <input type={'text'} placeholder='Enter UserName'/>
      <input type={'password'} placeholder='Enter Password'/>
     
        <button type='submit' onClick={navigate('/Users')}>Log In</button>
  </div>;
};
// https://www.nicesnippets.com/blog/react-native-material-swipe-delete-example#:~:text=To%20use%20swipe%20delete%20you%20need%20to%20npm,terminal%20and%20jump%20into%20your%20project%20cd%20SwipeDelete