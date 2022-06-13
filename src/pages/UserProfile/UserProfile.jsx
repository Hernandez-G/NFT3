import "./UserProfile.css"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import * as usersApi from "../../utilities/users-api";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function UserProfile({user}) {
  const [profile, setProfile] = useState({});
  // const navigate = useNavigate();
useEffect(() => {
  async function updateUserProfile(username, bio) {
     const profile = await usersApi.getProfile();
     console.log(profile);
     setProfile(profile);

  //     navigate('/userprofile');
  }
updateUserProfile();
}, [])


  return (
    <>
      <div className="user.user">
        <div className="userPhoto"></div>
      &nbsp; &nbsp; &nbsp;
      <div className="userProfile">
       <h3 className="userDetails">
         {profile&&profile.username}
        <p className="bioUser">
          <br />
          {profile&&profile.bio}
        </p>
      </h3>
      <div className="linksProfile">
        <Link className="edit-profile" to="/editprofile"><FaRegEdit /></Link>
        <Link className="favorties-link-profile" to="/favorites"><AiOutlineHeart className="favorites-page-icon"/></Link>
      </div>
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