import React, { Component } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = (props) => {
    console.log("AddUser.js");

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="username" />
        {/* <button type="submit">Submit</button> */}
        <Button type="submit"> Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
