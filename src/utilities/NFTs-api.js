import sendRequest from './send-request';
const BASE_URL = '/api.nftport.xyz/';

export function searchBar() {
    return sendRequest(BASE_URL, 'GET', nftData);
}