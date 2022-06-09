const Nft = require('../../models/nft')
const fetch = require('node-fetch');
const user = require('../../models/user');
const API_URL = "https://api.nftport.xyz"

module.exports = {
    index,
    show,
    search,
    toggleLike,
    getFavorites
};

async function getFavorites(req, res) {
    const favs = await Nft.find({users: req.user._id});
    res.json(favs);
}

async function toggleLike(req, res) {
    const likedNft = await Nft.findOne({tokenId: req.params.tokenId})
    console.log(likedNft)
    if (likedNft) {
        let alreadyLiked = likedNft.users.find(u => u.equals(req.user._id));
        if (alreadyLiked) {
            alreadyLiked.remove();
        } else {
            likedNft.users.push(req.user._id);
        } 
        await likedNft.save()
        res.json(likedNft)
    } else {
        //fetch nft from API using req.params.tokenId and req.body.contractAddress
        let apiNft = await fetch(`${API_URL}/v0/nfts/${req.body.contractAddress}/${req.params.tokenId}?chain=${req.body.chain}`,{
            headers:{Authorization:`${process.env.API_KEY}`}
        }).then(res => res.json());
        console.log(apiNft);
        apiNft = apiNft.nft;
        const newNft = await Nft.create({
            name: apiNft.metadata.name,
            contractAddress: apiNft.contract_address,
            tokenId: apiNft.token_id,
            imageUrl: apiNft.cached_file_url,
            users: [req.user._id]
        });
        res.json(newNft)
    }
}

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

