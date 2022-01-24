import React,{useState,useEffect} from 'react';
import UserDataService from '../services/users'
import { Link } from 'react-router-dom';


export const Users = (props) => {
  const initialUsersState = {
    id:null,
    name:"",
    text:"",
    user_id:""
  }
  const [user,setUser] = useState(initialUsersState)

  const getUsers = (id)=>{
    UserDataService.get(id)
    .then(response=>{
      setUser(response.data);
      console.log(response.data)
    })
    .catch(e=>{
      console.log(e)
    })

   
  };
  useEffect(()=>{
    getUsers(props.match.params.id);

  },[props.match.params.id]);

  const deleteUser = (userId,index)=>{
    UserDataService.deleteUser(userId)
    .then(response =>{
      setUser((prevState)=>{
        prevState.user.splice(index,1)
        return({
          ...prevState
        })
      })
    })
    .catch(e=>{
      console.log(e)
    })
  }

  return (
  <div>
    {user ? (
      <div>
        <h4>{user.name}</h4>
        <p>
          <strong>Description:</strong>{user.text} <br />
          <strong>UserId:</strong>{user.user_id}
        </p>
         <Link to ={'/addUser' + props.match.params.id}>
           Add User
         </Link>
      </div>
    ):null}
  </div>
  );
};
