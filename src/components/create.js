import React, {
    useState
} from 'react';
import axios from 'axios';
import { Checkbox } from 'semantic-ui-react';
export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    function postData() {
        console.log("Post func ")
        axios.post(`https://62abdd92a62365888be173b9.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
        setFirstName('');
        setLastName('');
        setCheckbox(false);
        console.log("firstName :", firstName)
        console.log("lastName :", lastName)
        console.log("checkbox :", checkbox)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Event: Form Submit');

    }

    return (
        <div>

            <div> Hello this is Create page</div>

            <form onSubmit={submitHandler}>
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
                    onChange={(e) => setCheckbox(!checkbox)} />
                <button onClick={postData} type='submit'>Submit</button>

            </form>
        </div>
    )
}