import { useUserContext } from './Context';

function Subscribe() {
  const userDetails = useUserContext();
  return (
    <div>
      {userDetails.login && (
        <b> total number subscribe {userDetails.totalSubscribe}</b>
      )}
    </div>
  );
}
export default Subscribe;
