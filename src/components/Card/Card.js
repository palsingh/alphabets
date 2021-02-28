import './Card.css'

function Card(props) {
    return <div className="card bg-color-level-1">
        <span className="char punjabi">{ props.char }</span>
    </div>
}

export default Card;