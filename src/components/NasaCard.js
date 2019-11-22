import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaStuff from './NasaStuff';

export default function () {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            const cards = response.data;
            (console.log(response))
            setCards([cards])
        })
        .catch(error => {
            console.log("Problem with code: ", error)
        })
    }, []);

    return (
        <div>
            <div>
                {cards.map(card => {
                    return (
                        <NasaStuff
                            copyright={card.copyright}
                            date={card.date}
                            title={card.title}
                            imgUrl={card.url}
                            explanation={card.explanation}
                        ></NasaStuff>
                    )
                })}
            </div>
        </div>
    )
};