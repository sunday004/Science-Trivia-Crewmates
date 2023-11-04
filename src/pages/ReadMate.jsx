import React, { useState, useEffect } from 'react';
import './ReadMate.css'
import Card from '../Components/Card';

const ReadMates = ({data}) => {

    const [mates, setMates] = useState([]);
    
    useEffect(() => {
        setMates(data);
    }, [data]);
    
    return (
        <div className="ReadMates">
            {
                mates && mates.length > 0 ?
                mates.map((mate,index) => 
                   <Card id={mate.id} Name={mate.Name} IQ={mate.IQ}  Strength={mate.Strength} gender={mate.gender} key={index}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
            
        </div>  
    )
}

export default ReadMates;