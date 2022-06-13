import "./UserProfile.css"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import * as usersApi from "../../utilities/users-api";
import { useEffect, useState, useRef } from "react";
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard';




export default function UserProfile({user, photo}) {
  const [profile, setProfile] = useState({});
useEffect(() => {
  async function updateUserProfile(username, bio) {
     const profile = await usersApi.getProfile();
     console.log(profile);
     setProfile(profile);

  //     navigate('/userprofile');
}
updateUserProfile();
}, [])

const [title, setTitle] = useState('');
const [photos, setPhotos] = useState([]);
const fileInputRef = useRef();

useEffect(function() {
  photosAPI.getAll().then(photos => setPhotos(photos));
}, []);


async function handleUpload() {
  // Use FormData object to send the inputs in the fetch request
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
  const formData = new FormData();
  formData.append('title', title);
  formData.append('photo', fileInputRef.current.files[0]);
  const newPhoto = await photosAPI.upload(formData);
  setPhotos([newPhoto, ...photos]);
  // Clear the description and file inputs
  setTitle('');
  fileInputRef.current.value = '';
}

  return (
    <>
      <div className="user.user">
        <div className="userPhoto">
        <input type="file" ref={fileInputRef} />
        <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
        <button className="UploadBTN" onClick={handleUpload}>Upload Photo</button>
        </div>
      &nbsp; &nbsp; &nbsp;
      <div className="userProfile">
       <h3 className="userDetails">
         {profile&&profile.username}
        <p className="bioUser">
          <br />
          {profile&&profile.bio}
        </p>
        <Link className="edit-profile" to="/editprofile"><FaRegEdit /></Link>
        <Link className="favorties-link-profile" to="/favorites"><AiOutlineHeart className="favorites-page-icon"/></Link>
      </h3>
      <div className="linksProfile">
      </div>
        </div>
        </div>
        <br />
        <div>
        <h1 className="Uploads">Your Uploads</h1>

       <div className="userPhotos"> {photos.map(p => <PhotoCard className="photoCardUpload" photo={p} key={p._id} />)} </div>
        </div>
        <br />
        <br />
        <div className="favProfileContainer">
          <FavoritesPage />
      </div>
    </>
  );
}