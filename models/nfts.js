const Schema = require('mongoose').Schema;

const nftSchema = new Schema({
    name: {type: String, requires: true},
    token_id: {
        type: String,
        require: true,
    }

})
module.exports = nftSchema;