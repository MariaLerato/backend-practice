import React, { useState, useEffect } from "react";
import UsersDataService from "../services/users";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState();

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
  const onChangeSearchName = (e) => {
    const SearchName = e.target.value;
    setSearchName(SearchName);
  };

  const refreshList = ()=>{
    retrieveUsers()
  }
  const find = (query,by)=>{
    UsersDataService.find(query,by)
    .then(response =>{
      console.log(response.data);
      setUsers(response.data.users)
    })
  }

  const findByName = ()=>{
    find(searchName,"name")
  }

  useEffect(() => {
    retrieveUsers();
  }, []);
  console.log('Users : ', users)
  return (
    <>
      <div>
      <input type={"text"} placeholder="Enter Name" value={searchName} onChange={onChangeSearchName} />
      <button type="submit" onClick={findByName} >Submit</button>
      </div>
      {users.map((data)=>
        <ul key={data._id}>
            <h5>{data.name}</h5>
            <p>{data.text}</p>
                          {data.date}
                      </ul>
                 
          
      )}
      <Link to={'/addUser'}>Add New User</Link>
    </>
  );
};
