// import { useParams } from "react-router-dom";
import React from 'react';
import "./NftDetailsPage.css";
import { useParams } from "react-router-dom";
// import { CgDetailsMore } from "react-icons/cg"
import Modal from '../../components/Modal/Modal';
// import CommentSectionForm from '../../components/CommentSectionForm/CommentSectionForm'



function NftDetailsPage({nfts}) {
    const {id} = useParams();
    console.log(id);
    
    const nft = nfts.find((nft) => id === nft.token_id);
    console.log(nft);

    return (
        <>
        {/* <div className='detail-page'> */}
        <div className='nft-image'><img src={nft.cached_file_url} alt="nft-img"/></div>
        <h1 className='nft-detail-name'>{nft.name}</h1>
        <p className='detail-description'>{nft.description} </p> 
        {/* {id} */}
        {/* {nft.mint_date}  */}
        <hr />
        {/* </div> */}
        <Modal />
        
        </>

    )
};
export default NftDetailsPage;