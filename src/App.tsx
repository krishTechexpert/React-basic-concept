import './App.css';
import Profile from './Profile';
import Subscribe from './Subscribe';
import { UserContextProvider } from './Context';

function App() {
  return (
    <>
      <UserContextProvider>
        <Profile />
        <Subscribe />
      </UserContextProvider>
    </>
  );
}

export default App;
