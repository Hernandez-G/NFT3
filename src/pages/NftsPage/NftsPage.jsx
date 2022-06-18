import React from 'react';
import { Card } from "react-bootstrap";
import "./NftsPage.css";
import { Link } from "react-router-dom"
import { CgDetailsMore } from "react-icons/cg"
import { BiHeart } from "react-icons/bi"
import * as nftApi from "../../utilities/NFTs-api"
import { useNavigate } from 'react-router-dom';



export default function NftPage({nfts}) {
    const navigate = useNavigate();

    async function handleLikedNft(tokenId, contractAddress, chain) {
        await nftApi.toggleLike(tokenId, contractAddress, chain);
        navigate('/favorites');
    }

    const allNfts = nfts.map((n, index) => 
        <div className="NftSearch" key={index}>
            <Card style={{width: '20rem', height:'40rem'}}>
                <Card.Body className='main-card'>
                    <Card.Img className="nftImg" src={n.cached_file_url} />
                    <Card.Title className="nft-name">{n.name}</Card.Title>
                    <Card.Text>{n.chain}</Card.Text> 
                    <Card.Text>{n.contract_address}</Card.Text>
                    <Link to={`/nftdetails/${n.token_id}`}><CgDetailsMore /></Link>
                    <button onClick={() => handleLikedNft(n.token_id, n.contract_address, n.chain)}><BiHeart /></button>
                </Card.Body>
                </Card>
        </div>
    )
    return(
        <>
        <h1 className='Results'> Search Results: </h1>
        <div className="nft-container">
            {allNfts}            
        </div>
        
        </>
    )
}
