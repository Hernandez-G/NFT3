const express = require('express');
const router = express.Router();
const nftsCtrl = require('../../controllers/api/nfts');

// GET /api/items
router.get('/', nftsCtrl.index);
// GET /api/items/:id
router.get('/contract_address/:id', nftsCtrl.show);

module.exports = router;
