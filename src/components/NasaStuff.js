import React from 'react';

const NasaStuff = (props) => {
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <h2>Author: {props.copyright}</h2>
            <h2>Date: {props.date}</h2>
            <p>Explanation: {props.explanation}</p>
            <img src={props.imgUrl} alt="img"/>
        </div>
    )
}
export default NasaStuff;