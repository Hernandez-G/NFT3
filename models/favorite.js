const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likedNftSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref:'User'
    }],
    price: {
        type: String,
        require
    },
    chain: {
        type: String
    },
    metadata_image: {
        type: Metadata

    },
    mint_date: {
        type: String
    },
    owner: {
        type: String
    },
    contract_symbol: {
        type: String
    },
    description: {
        type: String
    }

    


})

module.exports = mongoose.model('favoriteSchema', favoriteSchema);