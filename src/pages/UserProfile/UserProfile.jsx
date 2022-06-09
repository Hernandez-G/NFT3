import "./UserProfile.css"
import { Link } from "react-router-dom";

export default function UserProfile({user}) {



  
  return (
    <>
      <div className="detail-card">
      <h3>{user.name}</h3>
        <p>{user.bio}</p>
        {/* <a href="#">Instagram</a> */}
        {/* <a href="#">Twitter</a> */}
        <hr />
        {/* <button>edit profile</button> */}
        <Link to="/editprofile">Edit Profile</Link>
        <Link to="/favorites">Favorites</Link>
    {/* [nft likes] */}
        <hr/>
        {/* <ProfileForm /> */}


      </div>
    </>
  );
}