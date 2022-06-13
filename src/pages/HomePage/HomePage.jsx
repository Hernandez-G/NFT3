import "./HomePage.css"
import { Card } from "react-bootstrap"

export default function HomePage() {
    return ( 
        <>
        <div className="oneOfThree">
        <h1 className="landing-page">NFT3</h1> 
        <img className="homeNFT" src="https://lh3.googleusercontent.com/Hi5JRhdzpYqpg3W2FTQiTgX2njhCHCR4NTmj_YcGzdGdlmp4rrvA7fA7W_Nm6KmOezbc0oVTWKvBmBmaR39VKmeB2CpYZNzJ-D2X=w600" alt="Bored Ape Solana Club #1119" />
        </div>       
        <div className="allImg">
        <h1 className="trending">TRENDING</h1>
        <div className="twoOfThree"> 
        
        <Card.Body className="card1">
        <Card.Title>goblintown #3173</Card.Title>
            <img 
            className="img1" 
            src="https://img.seadn.io/files/61634910145bc888cb70fe35cdeda5bf.png?fit=max&auto=format" 
            alt=""
            />
            <Card.Link className="link1" href="https://goblintown.wtf/">GOBLINTOWN.WTF</Card.Link>
        </Card.Body>
            
        <Card.Body className="card2">
        <Card.Title>CryptoPunk #3535</Card.Title>
            <img className="img1" src="https://img.seadn.io/files/afb30abf7439ef1c42df1f1bb66662cc.png?fit=max&auto=format" alt=""/>
            <Card.Link className="link2" href="https://cryptopunks.app/">CRYPTOPUNKS</Card.Link>
        </Card.Body>

        <Card.Body className="card3">
        <Card.Title>Murakami.Flower #6594</Card.Title>
            <img className="img1" src="https://img.seadn.io/files/3d1794a15357655eb278c358e1c4d269.png?fit=max&auto=format"alt=""/>
        <Card.Link className="link3" href="https://murakamiflowers.kaikaikiki.com/">Murakami.Flowers Official</Card.Link>
        </Card.Body> 

        <Card.Body className="card4">
        <Card.Title>Neo Hunter #3332</Card.Title>
            <img className="img1" src="https://lh3.googleusercontent.com/j15arsvr6B5Ud9Nu4MkgllkUtsz-dm-mfPhXoIb7EbG7MrEZdPNwnN6E7h8jb9CcvydELfKZPekdTDbCerFURXkJUyBAF0CyMO5BKw=s0"alt=""/>
        <Card.Link className="link4" href="https://neohunters.io/">NEOHUNTERS</Card.Link>
        </Card.Body> 
        </div>
        </div>
        </>
    )
}