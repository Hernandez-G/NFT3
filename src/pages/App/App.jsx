import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import UserProfile from '../UserProfile/UserProfile';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import './App.css';
import NftPage from '../NftsPage/NftsPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [nfts, setNfts] = useState([]);
  const [search, setSearch] = useState(" ");

  
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };
  const handleClick = (evt) => {
    fetch(`https://api.nftport.xyz/v0/search?text=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "5653735e-0d97-4b07-bb3e-6ee1e8f96233"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNfts(data.search_results);
      
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
          <div className="search">
          <input
            id="outlined-basic"
            variant="outlined"
            label="Search"
            value={search}
            onChange={handleChange}
          />
          <button type="button" onClick={handleClick}>
            Click Me!
          </button>
        </div>
        </>
        :
        <AuthPage setUser={setUser} />
        
      }
      <SearchBar />
      <NftPage nfts={nfts}/>
    </main>
  );
}

export default App;
