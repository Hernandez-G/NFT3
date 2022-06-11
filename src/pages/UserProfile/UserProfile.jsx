import "./UserProfile.css"
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from "react-router-dom";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

export default function UserProfile({user}) {


  // setUser();

  return (
    <>
      <div className="user.user">
        <div className="userPhoto"></div>
      &nbsp; &nbsp; &nbsp;
      <div className="userProfile">
       <h3 className="userDetails">
         {user.name}
      </h3>
        <Link className="edit-profile" to="/editprofile">Edit Profile</Link>
         &nbsp; &nbsp; &nbsp;
        <Link className="favorties-link-profile" to="/favorites"><AiOutlineHeart className="favorites-page-icon"/></Link>
        <p>{user.bio}</p>
        </div>
        </div>
        <br />
        <br />
        <br />
        <div className="favProfileContainer">
          <FavoritesPage />
      </div>
    </>
  );
}