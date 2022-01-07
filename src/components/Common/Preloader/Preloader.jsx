import React from "react";
import preloader from './../../../assets/images/preloader.svg';


let Preloader = (props) => {
    return (
        <>
            {props.isFetching ? <img src={preloader} alt="download" ></img> : null}
        </>
    )
}

export default Preloader;