const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/nfts');


router.get('/nfts/{contract_address}/{token_id}, nftsCtrl.display')

module.exports = router;