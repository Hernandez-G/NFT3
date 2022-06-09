const express = require('express');
const router = express.Router();
const nftsCtrl = require('../../controllers/api/nfts');

// GET /api/items
router.get('/nftspage', nftsCtrl.index);

router.get('/favorites', nftsCtrl.getFavorites);

// GET /api/items/:id
router.get('/contract_address/:id', nftsCtrl.show);

router.post('/search', nftsCtrl.search);

router.post('/:tokenId/toggleLike', nftsCtrl.toggleLike);

module.exports = router;
