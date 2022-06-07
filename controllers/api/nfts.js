const Nft = require('../../models/nft')
const fetch = require('node-fetch')

module.exports = {
    index,
    show,
    search,
    // nft

};

// async function nft(req, res) {
//     console.log('xfbg');
//     const nftsMetadata = await fetch(`${API_URL}/v0/nft?text=${req.body.query}`,{
//         headers:{Authorization:`${process.env.API_KEY}`}
//     }).then(res => res.json());
//     res.json(nftsMetadata.search_results);
// }

const API_URL = "https://api.nftport.xyz"
async function index(req, res) {
    const nfts = await Nft.map('metadata').populate('name', 'description', 'image').exec();
    res.json(nfts);
}

async function show(req, res) {
    const nft = await Nft.findById(req.params.id);
    res.json(nft);
}

async function search(req, res) {
    console.log('xfbg');
    const nfts = await fetch(`${API_URL}/v0/search?text=${req.body.query}`,{
        headers:{Authorization:`${process.env.API_KEY}`}
    }).then(res => res.json());
    res.json(nfts.search_results);
}

