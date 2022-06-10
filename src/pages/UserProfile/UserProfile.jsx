import "./UserProfile.css"
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from "react-router-dom";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

export default function UserProfile({user, setUser}) {


  // setUser();

  return (
    <>
      <div className="detail-card">
      <h3>{user.name}</h3>
      <h3>{user.username}</h3>
        <p>{user.bio}</p>
        <hr />
        <Link className="edit-profile" to="/editprofile">Edit Profile</Link>
        &nbsp; &nbsp; &nbsp; &nbsp;

        <Link className="favorties-link-profile" to="/favorites"><AiOutlineHeart className="favorites-page-icon"/></Link>
        <hr/>
      <FavoritesPage />

      </div>
    </>
  );
}