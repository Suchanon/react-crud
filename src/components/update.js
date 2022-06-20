import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        //FIXED warning checkbox is not boolean
        const get = String(localStorage.getItem('Checkbox Value')) == 'true'
        setCheckbox(get)
        // console.log("localStorage.getItem('ID')>>>", localStorage.getItem('ID'))
    }, []);

    const updateAPIData = () => {
        console.log("updateAPIData>>>")
        axios.put(`https://62abdd92a62365888be173b9.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        })
        setFirstName('');
        setLastName('');
        setCheckbox(false);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Event: Form Submit');

    }

    return (
        <div>
            <form  onSubmit={submitHandler} >
                <label>Frist name</label>
                <input placeholder='first name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />

                <br />

                <label>Last name</label>
                <input placeholder='please type'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                <br />

                <Checkbox label='I agree to the Terms and Conditions'
                    checked={checkbox}
                    onChange={(e) => setCheckbox(!checkbox)} />
                <button
                    onClick={updateAPIData}
                    type='submit'>Submit</button>

            </form>
        </div>
    )
}