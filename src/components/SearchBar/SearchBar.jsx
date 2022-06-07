import "./SearchBar.css";
import { useState} from 'react';

// import * as nftAPI from "../../utilities/NFTs-api"

// import NftPage from '../../pages/NftsPage/NftsPage';

export default function SearchBar({handleSearch}) {
    const [search, setSearch] = useState(" ");

    const handleChange = (evt) => {
        setSearch(evt.target.value);
      };
  
      

    return(
        <div className="search">
        <input
          id="outlined-basic"
          variant="outlined"
          label="Search"
          value={search}
          onChange={handleChange}
        />
        <button onClick={()=> handleSearch(search)}> 
              Click Me!
          </button>
      </div>
    )
}