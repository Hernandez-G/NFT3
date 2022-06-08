import { useState } from 'react';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import UserProfile from '../UserProfile/UserProfile';
import NavBar from '../../components/NavBar/NavBar';
import NftsPage from '../NftsPage/NftsPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NftDetailsPage from "../NftDetailsPage/NftDetailsPage"
import EditProfile from "../EditProfile/EditProfile"
import * as nftAPI from "../../utilities/NFTs-api"


function App() {
  const [user, setUser] = useState(getUser());
  const [nfts, setNfts] = useState([]);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handleSearch(searchWord) {
    setQuery(searchWord)
    console.log(query)
    getNft(searchWord);
  }
    
        async function getNft(searchWord){
            const nftResult = await nftAPI.search(searchWord);
              setNfts(nftResult);
              navigate("/nftspage")
            
        }
  
    console.log(nfts)

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}  handleSearch={handleSearch} />
          <Routes>
            {/* Route components in here */}
            <Route path="/nftspage" element={<NftsPage nfts={nfts} />} />
            <Route path="/userprofile" element={<UserProfile user={user}/>} />
            <Route path="/nftdetails/:id" element={<NftDetailsPage nfts={nfts} />} />
            <Route path="/editprofile" element={<EditProfile />} />
          

          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
        
      }
    </main>
  );
}
export default App;
