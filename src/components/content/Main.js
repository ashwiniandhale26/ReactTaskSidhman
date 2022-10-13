import React, { useRef, useState } from "react";
import "./Main.css";
import video2 from "./videoFiles/video2.mp4"

const Main = () => {
    // const[enteredData, setEnteredData] = useState();
const btnClickHandler=(url)=>{
    // setEnteredData(console.log("okay"));
    window.open(url, '_blank', 'noopenere noreferrer')
}

    const videoRef = useRef();
    const clickHandler = () => {
        videoRef.current.play();
    }
    const clickPause = () => {
        videoRef.current.pause();
    }
    return (

        <div className="navdiv">
            <nav className="nav">
                <ul>
                    {<li><a href="#">The World</a></li>}
                    {<li><a href="#">SDK</a></li>}
                    {<li><a href="https://www.coraltribe.io/#FAQs">FAQ</a></li>}
                    {<li><a href="https://opensea.io/explore-collections">Explore</a></li>}
                    <button className="btn1" onClick={()=> btnClickHandler('https://bayctron.com/my-wallet')}>Connect Wallet</button>
                </ul>
            </nav>
            <video src={video2} height="800px" width="100%" ref={videoRef} controls>
            </video>
            <div className="btn-div">
                <button className="btn" onClick={clickHandler}>ENTER</button>
                <button className="btn" onClick={clickPause}>Pause</button>
                <div className="partition">
                    <h2>WELCOME TO THE CLUB</h2>
                    <p id="myp">When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Bored Ape can serve as your digital identity,
                        and open digital doors for you.<br/>
                        <a href="https://www.oxyaorigin.com/">- https://www.oxyaorigin.com/.
                        </a>
                    </p>
                    <img src="https://www.asiacryptotoday.com/wp-content/uploads/2022/02/bored-ape-yacht-club.png" height="400px" width="400px" />

                </div>

            </div>

        </div>

    );


}


export default Main;