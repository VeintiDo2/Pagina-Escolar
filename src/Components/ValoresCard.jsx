const ValoresCard = ({ title, body, icon }) => {

    return (
        <article>
            <div>
                <img src={icon} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </article>
    )
}

export default ValoresCard;