import sendRequest from './send-request';

const BASE_URL = '/api.nftport.xyz/';

const [nfts, setNfts] = useState([]);
const [search, setSearch] = useState(" ");


const handleChange = (evt) => {
  setSearch(evt.target.value);
};
const handleClick = (evt) => {
  fetch(`https://api.nftport.xyz/v0/search?text=${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "5653735e-0d97-4b07-bb3e-6ee1e8f96233"
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setNfts(data.search_results);
    
    })
    .catch((err) => {
      console.error(err);
    });
};


export function getById(contract_address, token_id) {
    return sendRequest(`${BASE_URL}/${contract_address}/${token_id}`);
}