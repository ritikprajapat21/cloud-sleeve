import React from "react";

const Img = props => {
    return (
        <img src={props.src} alt={props.alt} className={props.className} />
    );
};

export default Img;