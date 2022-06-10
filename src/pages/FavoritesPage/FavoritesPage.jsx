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




    const nftCards = nfts.map(n => <div> {n.name} <img className="nftImage" src={n.imageUrl}/> 
    
    <button type="button" onClick={() => removeLike(n._id)} > <IoHeartDislikeOutline /> </button>
    </div>);

    async function removeLike(id) {
        const removeNftCards = await nftApi.removeFavorites(id);
        const updateNftCards = nftCards.map(n => n.tokenId !== removeNftCards);
        setRefresh(!refresh)
    }

 

    return(
        <main>
            <h1>Your Favorites</h1>
            <Card style={{width: '20rem', height:'30rem'}}>
            <Card.Body className='main-card'>
            <div className="favNftDisplay"> 
            {nftCards} 
            </div>
            </Card.Body>
            </Card>
        </main>
        
        
        
    )

}

export default FavoritesPage;