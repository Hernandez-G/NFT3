import sendRequest from './send-request';

const BASE_URL = '/api.nftport.xyz/';


export function getById(contract_address, token_id) {
    return sendRequest(`${BASE_URL}/${contract_address}/${token_id}`);
}