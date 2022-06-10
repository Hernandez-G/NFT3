import sendRequest from './send-request';

const BASE_URL = '/api/nfts'


export function removeFavorites(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function getFavorites() {
    return sendRequest(`${BASE_URL}/favorites`);
}

export function toggleLike(tokenId, contractAddress, chain) {
    return sendRequest(`${BASE_URL}/${tokenId}/toggleLike`, "POST", {contractAddress, chain});
}

export function getById(contractAddress, tokenId) {
    return sendRequest(`${BASE_URL}/${contractAddress}/${tokenId}`);
}

export function search(query) {
    console.log(query)
    return sendRequest(`${BASE_URL}/search`, "POST", {query});
}