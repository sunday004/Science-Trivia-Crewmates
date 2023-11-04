import React from 'react'
import { useState } from 'react'
import './Card.css'
//import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <h2 className="name">{"Name: " + props.Name}</h2>
          <h3 className="IQ">{"Intelligence Quotient: " + props.IQ}</h3>
          <h3 className="strength">{"Strength: " + props.Strength}</h3>
          <h3>{"Gender: " + props.gender}</h3>
          <button><Link to={'update/'+ props.id}>Update</Link></button>
      </div>
  );
};

export default Card;