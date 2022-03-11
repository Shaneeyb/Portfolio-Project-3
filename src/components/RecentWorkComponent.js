import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';


import water from "../ParallaxImg/water.avif";

function RecentWork() {
  return (
    <div>
      <ParallaxProvider>
          <Parallax translateY={[-20, 20]}>
              <img src={water} style={{
                  width: "100%"
              }}>
                  </img>
          <h1 style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}>My Recent Work</h1>

            </Parallax>
     
      

      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="col"
              style={{
                textAlign: "center",
                padding: "40px",
              }}
            >
              <h1>Kingdom Man</h1>
              <p>
                Kingdom Man is my latest React project to show all the details
                of Inspire Waikele’s event, Kingdom Man. It is a mobile app that
                lets you sign up, gives you details and connect with Inspires
                team.
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
          <div className="col"></div>
          <img
            className="col"
            src="/Images/Macbook.png"
            style={{
              width: "80vh",
              padding: "40px",
            }}
          />
          <div
            className="col"
            style={{
              textAlign: "center",
              padding: "40px",
            }}
          >
            <h1>Nucampsite</h1>
            <p>
              Nucampsite is a campsite website and app that was designed by the
              Nucamp Bootcamp. It features fron end with React.js and Redux as
              well as back end with Node.js and mongoDB.
            </p>
          </div>
        </div>
      </div>
      <Parallax translateY={[-20, 20]}>
              <img src={water} style={{
                  width: "100%"
              }}>
                  </img>
          <h1 style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}>My Recent Work</h1>

            </Parallax>
      </ParallaxProvider>
    </div>
  );
}
export default RecentWork;


/*
   <ParallaxImg imgsrc={water} height="300px" opacity=".5">
            <h1 style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}>My Recent Work</h1>
        </ParallaxImg>
*/