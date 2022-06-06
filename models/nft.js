const Schema = require('mongoose').Schema;

const nftSchema = new Schema({
    name: {type: String, requires: true},
    contract_address: {
        type: String
    },
    token_id: {
        type: String,
        require: true,
    }

});
module.exports = nftSchema;