import './Card.css'

function Card(props) {
    return <div className="card bg-color-level-1">
        { props.char }
    </div>
}

export default Card;