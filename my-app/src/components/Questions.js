import React, { useState } from 'react';
import RadioButtonsGroup from "./ChildrenRadio";
import TextField from '@mui/material/TextField';

export default function Questions() {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [occupation, setOccupation] = useState('');
    const [age, setAge] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log('Form submission', firstName, surname, occupation, age);
    };

    return (
        <div style={{
            padding: '20px',
            borderRadius: '5px',
            color: 'black',
            width: '400px', // Adjust the width as needed
            margin: 'auto', // Center the form horizontally
        }}>
            <h3 style={{ marginBottom: '20px' }}>Fill in the form</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block' }}>First name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block' }}>Surname</label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        className="form-control"
                    />
                </div>
                <RadioButtonsGroup />
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block' }}>Occupation</label>
                    <input
                        type="text"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block' }}>Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
