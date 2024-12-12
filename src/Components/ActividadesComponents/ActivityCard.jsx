
const ActivityCard = ({ icon, title, description, date, color }) => {

    return (
        <article className={`activityCard ${color}`}>
            <img src={icon} alt="icon" />
            <h1>{title}</h1>
            <span>{description}</span>
            <span>{date}</span>
        </article>
    )
}

export default ActivityCard