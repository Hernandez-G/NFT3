import "./UserProfile.css"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

export default function UserProfile({user}) {



  return (
    <>
      <div className="user.user">
        <div className="userPhoto"></div>
      &nbsp; &nbsp; &nbsp;
      <div className="userProfile">
       <h3 className="userDetails">
         {user.name}
         {user.username}
      </h3>
      <div className="linksProfile">
        <Link className="edit-profile" to="/editprofile"><FaRegEdit /></Link>
        <Link className="favorties-link-profile" to="/favorites"><AiOutlineHeart className="favorites-page-icon"/></Link>
      </div>
        <p className="bioUser">
          {user.bio}
        </p>
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