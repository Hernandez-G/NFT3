const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const userSchema = require('./user');


const nftSchema = new Schema({
    name: {type: String, required: true},
    contractAddress: {
        type: String
    },
    tokenId: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

});
module.exports = mongoose.model('Nft', nftSchema);