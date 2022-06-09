import React from 'react';
import { Card } from "react-bootstrap";
import "./NftsPage.css";
import { Link } from "react-router-dom"
import { CgDetailsMore } from "react-icons/cg"



export default function NftPage({nfts}) {


    const allNfts = nfts.map((n, index) => 
        <div className="NftSearch" key={index}>
            <Card style={{width: '20rem', height:'40rem'}}>
                <Card.Body className='main-card'>
                    <Card.Img src={n.cached_file_url} />
                    <Card.Title className="nft-name">{n.name}</Card.Title>
                    <Card.Text>{n.chain}</Card.Text> 
                    <Card.Text>{n.contract_address}</Card.Text>
                    <Link to={`/nftdetails/${n.token_id}`}> <CgDetailsMore /> </Link>
                    <Link to="/creatorprofile">Creator</Link>
                </Card.Body>
                </Card>
        </div>
    )
    return(
        <div className="nft-container">
  
            {allNfts}            
        </div>
    )
}
