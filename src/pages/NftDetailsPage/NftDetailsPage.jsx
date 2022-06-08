// import { useParams } from "react-router-dom";
import React from 'react';
import "./NftDetailsPage.css";
import { useParams } from "react-router-dom";
// import { CgDetailsMore } from "react-icons/cg"
import Modal from '../../components/Modal/Modal';
import CommentSectionForm from '../../components/CommentSectionForm/CommentSectionForm'



function NftDetailsPage({nfts}) {
    const {id} = useParams();
    console.log(id);
    
    const nft = nfts.find((nft) => id === nft.token_id);
    console.log(nft);

    // const [nftMetadata, setNftMetadata] = useState(" ");
    // const handleChange = (evt) => {
    //     setNftMetadata(evt.target.value)
    //     console.log(nftMetadata);
    // }
    // const LikeButton = () => {
    //     const [liked, setLiked] = useState(null)
    // }

    return (
        <>
        <h1>{nft.name}</h1>
        <p>{id}
        {nft.description} 
        {nft.mint_date}  
        </p> 
        <hr />
        <Modal />
        <CommentSectionForm />
        </>

    )
};
export default NftDetailsPage;