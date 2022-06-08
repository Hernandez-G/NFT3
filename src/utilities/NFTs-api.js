import sendRequest from './send-request';

const BASE_URL = '/api/nfts'


export function getById(contract_address, token_id) {
    return sendRequest(`${BASE_URL}/${contract_address}/${token_id}`);
}

export function search(query) {
    console.log(query)
    return sendRequest(`${BASE_URL}/search`, "POST", {query});
}