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
