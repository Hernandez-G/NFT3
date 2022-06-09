import "./SearchBar.css";
import { useState} from 'react';
import { BiSearch } from "react-icons/bi"

// import * as nftAPI from "../../utilities/NFTs-api"

// import NftPage from '../../pages/NftsPage/NftsPage';

export default function SearchBar({handleSearch}) {
    const [search, setSearch] = useState(" ");

    const handleChange = (evt) => {
        setSearch(evt.target.value);
      };
  
      

    return(
        <div className="search-bar">
        <input
          id="outlined-basic"
          variant="outlined"
          label="Search"
          type="text"
          placeholder="search"
          value={search}
          onChange={handleChange}
        />
        <button className="icon" onClick={()=> handleSearch(search)}> <BiSearch /></button>
      </div>
    )
}