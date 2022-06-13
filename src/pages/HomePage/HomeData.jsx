import data from "../../data";

export default function HomeData(props) {
  return (
    <div className="container">
      {data[0].nfts.map((NFT) => {
        return (
          <p>
            {" "}
            <img className="homeNFT" src={NFT.metadata.image} alt="" />
            {/* <img className="homeNFT" src={NFT.image} alt="" /> */}
          </p>
        );
      })}
    </div>
  );
}
