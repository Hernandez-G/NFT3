import React from 'react';
import { Card } from "react-bootstrap";
import "./NftsPage.css";
import { Link } from "react-router-dom"


export default function NftPage({nfts}) {


    const allNfts = nfts.map((n, index) => 
        <div className="NftSearch" key={index}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    {/* <Card.Img src="{n.image}">{n.image}</Card.Img> */}
                    <Card.Title>{n.name}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">{n.description}</Card.Subtitle> */}
                    <Card.Text>{n.chain}</Card.Text> 
                    <Card.Text>{n.contract_address}</Card.Text>
                    {/* <Card.Text>{n.mint_date}</Card.Text> */}

                    <Link to={`/nftdetails/${n.token_id}`}>More Details</Link>
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
