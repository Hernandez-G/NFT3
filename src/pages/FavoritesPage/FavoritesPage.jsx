import { useState, useEffect } from "react";
import * as nftApi from '../../utilities/NFTs-api'

function FavoritesPage() {
    const [nfts, setNfts] = useState([]);

    useEffect(function() {
        async function getFavorties() {
            const nfts = await nftApi.getFavorites();
            setNfts(nfts);
        }
        getFavorties();
    }, []);

    const nftCards = nfts.map(n => <div> {n.name} </div>);
    return(
        <main>
            <h1>Your Favorites</h1>
            {nftCards}
        
        </main>
    )

}

export default FavoritesPage;