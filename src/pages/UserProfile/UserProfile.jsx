import "./UserProfile.css"
import { Link } from "react-router-dom";

export default function UserProfile({user}) {



  
  return (
    <>
      <div className="detail-card">
      <h3>{user.name}</h3>
        <p>{user.bio}</p>
        <hr />
        <Link className="edit-profile" to="/editprofile">Edit Profile</Link>
        <Link className="favorties-link-profile" to="/favorites">Favorites</Link>
        <hr/>


      </div>
    </>
  );
}