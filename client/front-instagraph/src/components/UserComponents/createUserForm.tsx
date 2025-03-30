import { CreateUserMutation, CreateUserDocument } from "../../gql/graphql";
import { GetUsersDocument } from "../../gql/graphql";
import { useMutation } from "@apollo/client"
import { useState } from "react";

function CreateUserForm() {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [age, setAge] = useState('0')
      const [numberPublication, setnumberPublication] = useState('0')
    
      const [createUser, {data, error, loading}] = useMutation<CreateUserMutation>(CreateUserDocument)

      const resetData = () => {
        setName('');
        setEmail('');
        setAge('0');
        setnumberPublication('0');
      }

      const handleFormSubmit = async (eventForm: React.FormEvent) => {
        eventForm.preventDefault()

        try {
            const result = await createUser({
                variables: {
                    name, 
                    email,
                    age: parseInt(age, 10),
                    numberPublication: parseInt(numberPublication, 10) || null
                },
                refetchQueries: [{ query:GetUsersDocument }]
            });
            console.log("data create =>", result.data?.createUserMut)
            console.log("content data", data)
            resetData()
            console.log("data create after reset =>", result.data?.createUserMut)
        } catch (error) {
            console.log(error)
        }
      }

      if (loading) return <p>Creating user...</p>;
      if (error) return <p>Error: {error.message}</p>;

      return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label  htmlFor="Name">Name:</label>
                <input value={name} onChange={eventForm => setName(eventForm.target.value)}/>
            </div>
            <div>
                <label htmlFor="Email">Email:</label>
                <input value={email} onChange={eventForm => setEmail(eventForm.target.value)}/>
            </div>
            <div>
                <label htmlFor="Age">Age:</label>
                <input value={age} onChange={eventForm => setAge(eventForm.target.value)}/>
            </div>

            <div>
                <button type="submit">Create User</button>
            </div>
        </form>
      )


} 


export default CreateUserForm;