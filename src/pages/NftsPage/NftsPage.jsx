import React from 'react';
import "./NftsPage.css";

export default function NftPage({nfts}) {

    const allNfts = nfts.map((n) => 
        <p className="NftSearch">
            <h3 className="name">{n.name}</h3>
            <br />
           <p className="description"> {n.description} </p>
            <br />
            {n.chain}
            <br />
            {n.contract_address}
        </p>
    )
    return(
        <div className="nft-container">
            {allNfts}            
        </div>
    )
}
