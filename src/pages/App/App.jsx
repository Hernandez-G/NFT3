import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import UserProfile from '../UserProfile/UserProfile';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import NftPage from '../NftsPage/NftsPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NftDetailsPage from "../NftDetailsPage/NftDetailsPage"
import * as nftAPI from "../../utilities/NFTs-api"


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<NftPage />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/nftdetails/:id" element={<NftDetailsPage  />} />
          

          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
        
      }
      <SearchBar />
      {/* <NftPage nfts={nfts}/> */}
    </main>
  );
}

export default App;
