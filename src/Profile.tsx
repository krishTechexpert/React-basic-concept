import { useUserContext } from './Context';

function Profile() {
  const userDetails = useUserContext();
  return (
    <>{userDetails.login && <div>user profile page {userDetails.name}</div>}</>
  );
}
export default Profile;
