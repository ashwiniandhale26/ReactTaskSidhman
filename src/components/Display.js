

import "./Display.css"
import video1 from "./videoFiles/video1.mp4"

const Display = () => {

    return (
        <>
            <div className="img-div">
                <h1>WELCOME TO BAYC</h1>
            </div>
            <video src={video1} controls autoPlay loop muted>

            </video>

            <div className="subdiv">
                <h1>WELCOME TO THE BORED APE YACHT CLUB</h1>
                {/* <button className="btn">ENTER</button>  */}
            </div>

        </>
    )
}
export default Display;