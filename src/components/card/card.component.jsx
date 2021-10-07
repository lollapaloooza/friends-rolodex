import './card.styles.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.friend.id}?set=set2&size=180x180`} alt="friend"/>
            <h1>{props.friend.name}</h1>
            <p>{props.friend.email}</p>
        </div>
    )
}