import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';



function App() {
  console.log("App.js");
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge)=>{
    setUsersList((prevList)=>{
      return [...prevList, {name: uName, age: uAge, id: Math.random.toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
