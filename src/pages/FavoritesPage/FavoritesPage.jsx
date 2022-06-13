import { useState, useEffect } from "react";
import * as nftApi from '../../utilities/NFTs-api'
import { IoHeartDislikeOutline } from "react-icons/io5"
import { Card } from "react-bootstrap";
import "./FavoritesPage.css"

function FavoritesPage() {
    const [nfts, setNfts] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(function() {
        async function getFavorties() {
            const nfts = await nftApi.getFavorites();
            setNfts(nfts);
        }
        getFavorties();
    }, [refresh]);




    const nftCards = nfts.map(n => 
    <div className="detailsFavNFT"> {n.name} <img className="nftImage" src={n.imageUrl}/> 
    
    <button type="button" onClick={() => removeLike(n._id)} > <IoHeartDislikeOutline /> </button>
    </div>
    );

    async function removeLike(id) {
        const removeNftCards = await nftApi.removeFavorites(id);
        const updateNftCards = nftCards.map(n => n.tokenId !== removeNftCards);
        setRefresh(!refresh)
    }

 

    return(
        <main>
            <div>
                <h1 className="favtitle">Your Favorites</h1>
                <div className="favNftDisplay"> 
                <Card.Body className='mainCard'>
                    {nftCards} 
                </Card.Body>
                </div>
            </div>
        </main>
        
        
        
    )

}

export default FavoritesPage;