const Nft = require('../../models/nft')

module.exports = {
    index,
    show,
};

async function index(req, res) {
    const nfts = await Nft.map('metadata').populate('name', 'description', 'image').exec();
    res.json(nfts);
}

async function show(req, res) {
    const nft = await Nft.findById(req.params.id);
    res.json(nft);
}

