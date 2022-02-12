import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="image-to-process" alt="item to find face on" src={imageUrl} />
            </div>
        </div>
    );
}

export default FaceRecognition;