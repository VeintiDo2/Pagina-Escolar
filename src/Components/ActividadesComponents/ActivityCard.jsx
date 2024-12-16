
const ActivityCard = ({ icon, title, description, date, color }) => {

    return (
        <article className={`activityCard ${color}`}>
            <aside>
                <img src={icon} />
            </aside>
            <div>
                <h1>{title}</h1>
                <span>{description}</span>
                {/* <span>{date}</span> */}
            </div>

        </article>
    )
}

export default ActivityCard