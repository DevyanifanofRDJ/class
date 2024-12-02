import React from 'react'
import "./ImageApp.css";
import pic from "../images/img.jpg";
import { useState } from "react" ;
const ImageApp = () => {
  const [width ,setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [rotation , setRotation] = useState(0);
  
    return (
    <div className="disp">
        <div className="image">
            <img src={pic}
                 style={{
                    width:width,
                    height:height,
                    transform: `rotate(${rotation}deg)`
                 }} 
                 />
        </div>
    </div>
  )
}

export default ImageApp;