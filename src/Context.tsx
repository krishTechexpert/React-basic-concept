import { createContext, useContext, useState } from 'react';
import { User } from './types';

const UserContext = createContext<User | undefined>(undefined);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState<User>({
    name: 'krishna',
    login: true,
    totalSubscribe: 100,
  });
 
return (
  <UserContext.Provider value={user}>
    {children}
  </UserContext.Provider>
);
}

// making custom hooks
export function useUserContext() {
  const userDetails = useContext(UserContext);

  if (userDetails === undefined) {
    throw new Error('something went wrong');
  }
  return userDetails;
}
