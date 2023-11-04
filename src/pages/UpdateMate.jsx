import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const UpdateMate = ({data}) => {

    console.log(data.name)
    const [mate, setMate] = useState({})
    //{Name: data.name, IQ: data.IQ, Strength: data.strength}
    console.log(mate)
    const {id} = useParams();
    console.log(id)
    useEffect(() =>{
        setMate(data.filter((item) => item.id == id)[0]);
        console.log(mate)
    },[id, data])
    console.log(mate.Name)

    const editMate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Mates')
            .update({Name: mate.Name, IQ: mate.IQ, Strength: mate.Strength, gender:mate.gender})
            .eq('id', id);

        window.location = "/";
    }

    const deleteMate = async (event) =>{
        event.preventDefault();

        await supabase
            .from('Mates')
            .delete()
            .eq('id', id); 

        window.location = "http://localhost:5173/";
    }



    return (
        <div>
            <h1>Update Your Crewmate</h1>
            <form onSubmit={editMate}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" value={mate.Name} name="name" onChange={(e) => setMate({...mate, Name: e.target.value})} /><br />
                <br/>
                <label htmlFor="IQ">Intelligence Quotient</label><br />
                <input type="text" id="IQ" value={mate.IQ} onChange={(e) => setMate({...mate, IQ: e.target.value})} name="IQ" /><br />
                <br/>

                <label htmlFor="strength">Strength</label><br />
                <textarea rows="5" value={mate.Strength} onChange={(e) => setMate({...mate, Strength: e.target.value})} cols="50" id="strength" >
                </textarea><br />
                <label htmlFor="gender">Gender</label><br />
                <label>
                    <input type="radio" name="gender" value="male" checked={mate.gender === 'male'} onChange={() => setMate({ ...mate, gender: 'male' })} />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={mate.gender === 'female'} onChange={() => setMate({ ...mate, gender: 'female' })} />
                    Female
                </label>
                <br />
                <br />
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deleteMate}>Delete</button>
            </form>
        </div>
    )
}

export default UpdateMate