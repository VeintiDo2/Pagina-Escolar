import { useState } from "react";
import ActivityCard from "./ActividadesComponents/ActivityCard";

import IconoNavidad from "../Images/IconoNavidad.png"
import IconoAmistad from "../Images/IconoAmistad.png"
import IconoDeportes from "../Images/IconoDeportes.png"
import IconoIndependecia from "../Images/IconoIndependencia.png"

const Actividades = () => {
    const [activitys, setActivitys] = useState([
        {
            id: 1,
            icon: IconoNavidad,
            title: "Velada navideña",
            description: "Reunion de padres e hijos para celebrar la navidad",
            date: "Diciembre 24",
            color: "green",
        },
        {
            id: 2,
            icon: IconoAmistad,
            title: "Dia de la amistad",
            description: "Celebramos la amistad entre toda la escuela",
            date: "Febrero 14",
            color: "red",
        },
        {
            id: 3,
            icon: IconoDeportes,
            title: "Dia del deporte",
            description: "Actividades recreativas para todos los estudiantes",
            date: "Abril 6",
            color: "orange",
        },
        {
            id: 4,
            icon: IconoIndependecia,
            title: "Dia de la independencia",
            description: "Celebramos la independencia de nuestro pais",
            date: "Septiembre 15",
            color: "blue",
        }
    ])

    return (
        <main>
            <h1>ACTIVIDADES</h1>
            <section className="activitysCardsContainer">
                {Object.values(activitys).map(activity =>
                    <ActivityCard
                        key={activity.id}
                        icon={activity.icon}
                        title={activity.title}
                        description={activity.description}
                        date={activity.date}
                        color={activity.color}
                    ></ActivityCard>
                )}
            </section>
        </main>

    )
}

export default Actividades;