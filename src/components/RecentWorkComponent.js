import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";

//import water from "./ParallaxImg/water.avif"

function RecentWork() {
    return (
        <div>
            <ParallaxProvider imgsrc="/Images/Img.JPG" height="500px">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                <h1>
                    My Recent Work
                </h1>
            </div>
            </ParallaxProvider>


            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col" style={{
                        textAlign: "center",
                        padding: "40px"
                    }}>
                            <h1>Kingdom Man</h1>
                            <p>
                                Kingdom Man is my latest React project to show all the details of Inspire Waikele’s event, Kingdom Man. It is a mobile app that lets you sign up, gives you details and connect with Inspires team.
                            </p>
                        </div>
                    </div>
                    <img
                        className="col"
                            src="/Images/Iphone.png"
                            style={{
                                width: "50vh",
                            }}
                    />
                </div>
            </div>

<br />

            <div className="container">
                <div className="row">
                    <div className="col">
                        
                    </div>
                    <img className="col"
                            src="/Images/Macbook.png"
                            style={{
                                width: "80vh",
                                padding: "40px"
                            }}
                    />
                    <div className="col" style={{
                        textAlign: "center",
                        padding: "40px"
                    }}>
                            <h1>Nucampsite</h1>
                            <p>
                            Nucampsite is a campsite website and app that was designed by the Nucamp Bootcamp. It features fron end with React.js and Redux as well as back end with Node.js and mongoDB.
                            </p>
                        </div>
                </div>
            </div>

        </div>
        
    )
}
export default RecentWork;