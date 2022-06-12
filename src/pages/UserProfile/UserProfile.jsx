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
         {user.name}
         <h3>fsfsgr</h3>
         {profile&&profile.username}
      </h3>
      <div className="linksProfile">
        <Link className="edit-profile" to="/editprofile"><FaRegEdit /></Link>
        <Link className="favorties-link-profile" to="/favorites"><AiOutlineHeart className="favorites-page-icon"/></Link>
      </div>
        <p className="bioUser">
          {profile&&profile.bio}
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