import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImg = (props) => {
return (
    <ParallaxBanner 
    layers={[{img: props.imgsrc , amount: 0.6}]}
    style={{ height: props.height }}
    >

    </ParallaxBanner>
)
} 

export default ParallaxImg;