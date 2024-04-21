import './App.css';
import Profile from './Profile';
import Subscribe from './Subscribe';
import { UserContextProvider } from './Context';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Profile />
        <Subscribe />
      </UserContextProvider>
    </div>
  );
}

export default App;
