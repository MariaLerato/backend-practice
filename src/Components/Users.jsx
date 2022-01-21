import React, { useState, useEffect } from "react";
import UsersDataService from "../services/users";
import { Link } from "react-router-dom";

export const Users = () => {
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

  useEffect(() => {
    retrieveUsers();
  }, []);
  console.log('Users : ', users)
  return (
    <>
      <div>
        <input type={"text"} placeholder="Enter Name" />
        <input type={"text"} placeholder="Enter Description" />
        <button type="submit">Save Info</button>
      </div>
      {users.map((data)=>
                      <ul key={data._id}>
                          <h5>{data.name}</h5>
                          <p>{data.text}</p>
                          {data.date}
                      </ul>
                 
          
      )}
    </>
  );
};
