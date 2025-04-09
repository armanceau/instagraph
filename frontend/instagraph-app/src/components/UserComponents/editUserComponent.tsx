import React, { useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { GetUserByIdQuery, GetUserByIdDocument } from "../../gql/graphql";

function SearchUserById() {
    const [id, setId] = useState('')
    const [getUserByIdRef, {data, error, loading}] = useLazyQuery<GetUserByIdQuery>(GetUserByIdDocument)

    const submitSearchRef = () => {
        getUserByIdRef({ variables: { id }})
    }

    return (
        <div>
            <div>
                <label htmlFor="Id">Enter user ID:</label>
                <input value={id} onChange={e => setId(e.target.value)} />
                <button onClick={submitSearchRef}>Search</button>
            </div>

            { loading && <p>Loading user...</p>}
            {error && <p>Error: {error.message}</p>}

            {data?.getUserById && (
                <div>
                    <p>ID: {data.getUserById.id}</p>
                    <p>Name: {data.getUserById.name}</p>
                    <p>Email: {data.getUserById.email}</p>
                    <p>Age: {data.getUserById.age}</p>
                    <p>NumberPublication: {data.getUserById.numberPublication ?? 0}</p>
              </div>
            )}
        </div>
    )
} 

export default SearchUserById;