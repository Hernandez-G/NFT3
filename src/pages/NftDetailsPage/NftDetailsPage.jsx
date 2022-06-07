// import { useParams } from "react-router-dom";
import React from 'react';
import "./NftDetailsPage.css";
import { useParams } from "react-router-dom";


function NftDetailsPage({nfts}) {
    const {id} = useParams();
    console.log(id);
    
    const nft = nfts.find((nft) => id === nft.token_id);
    console.log(nft);

    return (
        <>
        <h1>hi!</h1>
        <p>{id}</p>    
        <p>{nft.name}</p>    
        {/* <h1>something goes hereeeeeee!</h1> */}
        </>

    )
};
export default NftDetailsPage;