import React, { useState } from 'react';
import './CreateMate.css'
import { supabase } from '../client'

const CreateMate = () => {
    const [mate, setMate] = useState({ Name: '', IQ: '', Strength: '', gender: 'male' });

    const create = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('Mates')
            .insert([{ Name: mate.Name, IQ: mate.IQ, Strength: mate.Strength, gender: mate.gender }])
            .select();

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
            window.location = "/";
        }
    };

    return (
        <div>
            <form onSubmit={create}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" value={mate.Name} name="name" onChange={(e) => setMate({ ...mate, Name: e.target.value })} /><br />
                <br />

                <label htmlFor="IQ">Intelligence Quotient</label><br />
                <input type="text" id="IQ" value={mate.IQ} onChange={(e) => setMate({ ...mate, IQ: e.target.value })} name="IQ" /><br />
                <br />

                <label htmlFor="strength">Strength</label><br />
                <textarea rows="3" value={mate.Strength} onChange={(e) => setMate({ ...mate, Strength: e.target.value })} cols="50" id="strength">
                </textarea>
                <br />

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

                <input className='submit' type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default CreateMate;
