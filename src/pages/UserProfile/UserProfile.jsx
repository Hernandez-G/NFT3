import "./UserProfile.css"
// import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { Link } from "react-router-dom";
import * as nftApi from '../../utilities/NFTs-api'

export default function UserProfile({user}) {


  async function addToFavorites() {
    const nftObject = {
      
    }
    // const likedNfts = await nftApi.add()
  }
  // console.log(nft)
  
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
    {/* [nft likes] */}
        <hr/>
        {/* <ProfileForm /> */}


      </div>
    </>
  );
}