
import React, { Component } from 'react'
import classes from './Card.module.css';

const Card = (props)=> {
    console.log("Card.js");
    return (
      <div className={`${classes.card} ${props.className}`}>
        {props.children}
      </div>
    );
}

export default Card