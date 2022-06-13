import React from 'react';
import "./NftDetailsPage.css";
import { useParams } from "react-router-dom";
import Modal from '../../components/Modal/Modal';
import { Container } from 'react-bootstrap';



function NftDetailsPage({nfts}) {
    const {id} = useParams();
    console.log(id);
    
    const nft = nfts.find((nft) => id === nft.token_id);
    console.log(nft);

    return (
        <>
        <br />
        <br />
        <h1 className='nft-detail-name'>{nft.name}</h1>
        <br />
        <br />
        <container className="nftImgCont">
        <img className='nft-image' src={nft.cached_file_url} alt="nft-img"/>
        </container>
        <p className='detail-description'>{nft.description} </p> 
        <Modal />
        
        </>

    )
};
export default NftDetailsPage;