import { useState } from "react";
import { signinDocument } from "../queries/signin";
import { useMutation } from "@apollo/client";
import '../style/RegisterForm.css';

export function RegisterComponentFunc() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const [createUser, {data, error, loading}] = useMutation(signinDocument)

    const resetData = () => {
        setUsername('');
        setPassword('');
    }

    const handleFormSubmit = async (eventForm: React.FormEvent) => {
    eventForm.preventDefault()
    try {
        const result = await createUser({
            variables: {
                username, 
                password,
            },
        });
        console.log("result create user ==>", result)
        console.log("result create user ==>", data)
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
            <label htmlFor="Password">Password:</label>
            <input type="password" value={password} onChange={eventForm => setPassword(eventForm.target.value)}/>
        </div>


        <div>
            <button type="submit">Login to the app</button>
        </div>
        </form>
    </div>
    </> 
    );
}
