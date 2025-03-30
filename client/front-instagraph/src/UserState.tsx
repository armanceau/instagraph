
import { useQuery } from "@apollo/client"
import { GetUsersQuery, GetUsersDocument } from "./gql/graphql";
import CreateUserForm from "./components/UserComponents/createUserForm";
import SearchUserById from "./components/UserComponents/editUserComponent";

function UserState() {
  const { data, error, loading } = useQuery<GetUsersQuery>(GetUsersDocument)

  if (!data || loading) {
    return <p>loading</p>
  }
  if (error) return <p>error: {error.message}</p>

  return (
    <>
    <div>
      <h2>Create a new user</h2>
      <CreateUserForm/>

      <hr />

      <h2>Search User by ID</h2>
      <SearchUserById/>

    </div>

      <div>
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
      </div>
    </>
  );
}

export default UserState
