import React from "react";
import audio from "../assets/Monica.mp3"
import video from "../assets/3120431-uhd_3840_2160_24fps.mp4"
import images from "../assets/download (6).jpg"
export class Test extends React.Component {
    render() {
        return <div className="main" style={{

            display: "flex",
            width: "100vw",
            height: "40vh",

            gap: "3rem",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
        }}>

            <div style={{
                width: "700px", height: "fit-content"

            }}>
                <img src={images} alt="nothing" />
            </div>


            <div style={{

                width: "35%", borderRadius: "8px"
            }}>
                <video src={video} controls style={{ width: "40%", height: "100%", borderRadius: "8px" }}
                ></video>
            </div>


            <div style={{ width: "100px", height: "200px" }}>
                <audio src={audio} controls ></audio>
            </div>

        </div>
    }
}
// export default Test
