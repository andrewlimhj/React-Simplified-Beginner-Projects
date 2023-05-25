import { UserCard } from './UserCard';
import { UserCardClass } from './UserCardClass';
import './user.css';
import user from './user.json';

function App() {
  return (
    <>
      <UserCard
        name={user.name}
        age={user.age}
        phone={user.phoneNumber}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        age={user.age}
        phone={user.phoneNumber}
        address={user.address}
      />
    </>
  );
}

export default App;
