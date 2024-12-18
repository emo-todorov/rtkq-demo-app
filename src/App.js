import { faker } from "@faker-js/faker";
import { useAddUserMutation, useFetchUsersQuery } from "./store";
import UsersList from './components/users-list/UsersList';

function App() {
  const [addUser, results] = useAddUserMutation();

  const addUserHandler = () => {
    addUser();
  }

  return (
    <div className="App">
      <header className="main-header">
        <div>
          <span className="users-label">Users</span>
          <button onClick={addUserHandler}>Add user</button>
        </div>
      </header>
      <div>
        <UsersList />
      </div>
    </div>
  );
}

export default App;
