import { checkToken } from "../../utilities/users-service";
import "./UserProfile.css"
// import UserCard from "../../components/UserCard/UserCard"

export default function UserProfile() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <container className="detail-card">
      <h3>Usersname</h3>
        <p>Bio goes here</p>


      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </container>
    </>
  );
}