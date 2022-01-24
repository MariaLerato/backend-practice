import React, { useState, useEffect } from "react";
import UsersDataService from "../services/users";
import { Link } from "react-router-dom";
import { response } from "express";

export const AddUser = () => {
 
  
  const [searchName, setSearchName] = useState();
  const [submitted,setSubmitted] = useState(false)
  const [name,setName] = useState()
  const [text,setText] = useState()
  
  const initialUserState = {
    name:name,
    text:text,
  }
  const [users, setUsers] = useState(initialUserState);
  const retrieveUsers = () => {
    UsersDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };
 
  const [user,setUser] = useState(initialUserState)

  const handleInputChange = event=>{
    const {name,value} = event.target;
    setUser({...user,[name]:value});
  }
  const onChangeSearchName = (e) => {
    const SearchName = e.target.value;
    setSearchName(SearchName);
  };

  useEffect(() => {
    retrieveUsers();
  }, []);
  const addUser = (data)=>{
    UsersDataService.createUser(data)
    .then(response=>{
      setSubmitted(true);
      console.log(response.data)
    })
    .catch(e=>{
      console.log(e)
    })
  }
  console.log('Users : ', users)
  return (
    <>
        <h1>Hello Users</h1>
        <input type={'text'}
        required
        value={name}
        placeholder="enter name"
        onChange={handleInputChange}
        />
           <input type={'text'}
        required
        value={text}
        placeholder="enter description"
        onChange={handleInputChange}
        />
        <button type="submit" onClick={addUser}>Submit</button>
    </>
  );
};