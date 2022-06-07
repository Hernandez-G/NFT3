import React from 'react';
import { Card } from "react-bootstrap";
import "./NftsPage.css";
import { Link } from "react-router-dom"
import { useState } from 'react';
import * as nftAPI from "../../utilities/NFTs-api"


export default function NftPage() {

    const [nfts, setNfts] = useState([]);
    const [search, setSearch] = useState(" ");
  
    
    const handleChange = (evt) => {
      setSearch(evt.target.value);
    };
    const handleClick = async () => {
      const nftResult = await nftAPI.search(search)
        setNfts(nftResult)
        console.log(nftResult)
    }
  
    const allNfts = nfts.map((n) => 
        <div className="NftSearch">
            {/* <h3 className="name">{n.name}</h3>
            <br />
           {/* <p className="description"> {n.description} </p> */}
            {/* <br /> */}
            {/* <h4>{n.chain}</h4> */}
            {/* <br /> */}
            {/* {n.contract_address} */}
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    {/* <Card.Img src="{n.image}">{n.image}</Card.Img> */}
                    <Card.Title>{n.name}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">{n.description}</Card.Subtitle> */}
                    {/* <Card.Text>{n.chain}</Card.Text> */}
                    {/* <Card.Text>{n.contract_address}</Card.Text> */}

                    {/* <Link to={`/nftdetails/${n.token_id}`}>More Details</Link> */}
                    {/* <Link to="/creatorprofile">Creator</Link> */}
                </Card.Body>
                </Card>
        </div>
    )
    return(
        <div className="nft-container">
             <div className="search">
          <input
            id="outlined-basic"
            variant="outlined"
            label="Search"
            value={search}
            onChange={handleChange}
          />
          <button type="button" onClick={handleClick} to="/search">
            Click Me!
          </button>
        </div>
            {allNfts}            
        </div>
    )
}
