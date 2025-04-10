import { useState } from "react";
import { createuserDocument } from "../queries/createuser";
import { useMutation } from "@apollo/client";
import '../style/RegisterForm.css';

export function RegisterComponentFunc() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [ntel, setNtel] = useState('')
  

    const [createUser, {data, error, loading}] = useMutation(createuserDocument)

    const resetData = () => {
        setUsername('');
        setPassword('');
        setEmail('');
        setNtel('');
    }

    const handleFormSubmit = async (eventForm: React.FormEvent) => {
    eventForm.preventDefault()
    try {
        const result = await createUser({
            variables: {
                username, 
                password,
                email,
                ntel,
            },
        });
        console.log("value email", email)
        console.log("value ntel", ntel)
        console.log("result create user ==>", result)
        console.log("content data", data?.createUser.user)
        resetData()
    } catch (error) {
        console.log(error)
    }
    }

    if (loading) return <p>Creating user...</p>;
    if (error) return <p>Error: {error.message}</p>;



    return (
    <>
    <div>
    <form onSubmit={handleFormSubmit}>
        <div>
            <label  htmlFor="Name">Name:</label>
            <input value={username} onChange={eventForm => setUsername(eventForm.target.value)}/>
        </div>
        <div>
            <label htmlFor="Email">Email:</label>
            <input value={email} onChange={eventForm => setEmail(eventForm.target.value)}/>
        </div>
        <div>
            <label htmlFor="Ntel">Phone number:</label>
            <input value={ntel} onChange={eventForm => setNtel(eventForm.target.value)}/>
        </div>
        <div>
            <label htmlFor="Password">Password:</label>
            <input type="password" value={password} onChange={eventForm => setPassword(eventForm.target.value)}/>
        </div>


        <div>
            <button type="submit">Create User</button>
        </div>
        </form>
    </div>
    </> 
    );
}
