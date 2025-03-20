
import { useQuery } from "@apollo/client"
import { GetUsersQuery, GetUsersDocument } from "./gql/graphql";

function UserState() {
  const { data, error, loading } = useQuery<GetUsersQuery>(GetUsersDocument)

  if (!data || loading) {
    return <p>loading</p>
  }
  if (error) return <p>error: {error.message}</p>

  return (
    <>
      <h2>User Data</h2>
      <ul>
        {data?.getUsers?.map(userRef => (
          <li key={userRef?.id}>
            <p>{userRef?.id}</p>
            <p>{userRef?.name}</p>
            <p>{userRef?.age}</p>
            <p>{userRef?.email}</p>
            <p>{userRef?.numberPublication}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserState
