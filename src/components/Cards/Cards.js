import Card from '../Card/Card';
import { useEffect, useState } from 'react'
import './Cards.css'

function Cards() {
    const [alphabets, setAlphabets] = useState([]);

    useEffect(() => {
        fetch('./data/punjabi-alpabets.json')
            .then(response => response.json())
            .then(result => setAlphabets(result))
            .catch(err => console.log(`Some error has occured: ${err}`));
    }, []);

    return (
        <div className="cards">
            { alphabets.map((alphabet, i) => (
                <Card char={alphabet.character} key={i} />
            )) }
        </div>
    )
}

export default Cards;