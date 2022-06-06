import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom"


export default function NftDetailsPage({nfts}){
    const {id} = useParams();
    if (!nfts.length) return null;
    
    const nft = nfts.find((nft) => id === nft.token_id );
    
    
    return (
        <main>
            <h1>{nft.name}</h1>
        </main>


    )
}
