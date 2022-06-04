const Nfts = require('../../models/nfts')

module.exports = {
    show,
}

async function show(req, res) {
    const nfts = await Nfts.findById(req.params.id);
    res.json(nfts)
}

