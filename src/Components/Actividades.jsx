import { useState } from "react";
import ActivityCard from "./ActividadesComponents/ActivityCard";

import IconoNavidad from "../Images/IconoNavidad.png"
import IconoAmistad from "../Images/IconoAmistad.png"
import IconoDeportes from "../Images/IconoDeportes.png"
import IconoIndependecia from "../Images/IconoIndependencia.png"
import IconoTrabajadores from "../Images/IconoTrabajadores.png"
import IconoPaz from "../Images/peace.png"
import IconoLibro from "../Images/IconoLibro.png"
import IconoFiesta from "../Images/IconoFiesta.png"
import IconoFeria from "../Images/IconoFeria.png"
import IconoAfrocostarricense from "../Images/IconoAfrocostarricense.png"
import IconoAutismo from "../Images/IconoAutismo.png"

const Actividades = () => {
    const [activitys, setActivitys] = useState([
        { id: 1, icon: IconoNavidad, title: "Velada navideña", description: "Un encuentro especial entre padres e hijos para compartir la magia de la Navidad.", date: "Diciembre 24", color: "green" },
        { id: 2, icon: IconoAmistad, title: "Dia de la amistad", description: "Un día dedicado a fortalecer lazos de amistad con actividades y momentos de convivencia en toda la escuela.", date: "Febrero 14", color: "red" },
        { id: 3, icon: IconoDeportes, title: "Dia del deporte", description: "Jornada llena de energía y diversión con actividades deportivas para fomentar el trabajo en equipo y la salud física", color: "orange" },
        { id: 4, icon: IconoIndependecia, title: "Dia de la independencia", description: "Conmemoramos nuestra independencia con desfiles, actos cívicos y celebraciones culturales.", date: "Septiembre 15", color: "blue" },
        { id: 5, icon: IconoTrabajadores, title: "Dia del trabajador", description: "Reconocemos y celebramos el esfuerzo de todos los trabajadores con un día lleno de homenajes.", date: "", color: "pink" },
        { id: 6, icon: IconoPaz, title: "Semana de la paz", description: "Actividades educativas y reflexivas para promover la cultura de paz y convivencia armoniosa.", date: "", color: "lightblue" },
        { id: 7, icon: IconoLibro, title: "Dia del libro", description: "Una jornada para fomentar el amor por la lectura, con actividades como cuentacuentos y talleres literarios.", date: "", color: "green" },
        { id: 8, icon: IconoFiesta, title: "Regreso a clases", description: "Celebramos el inicio de un nuevo ciclo escolar con actividades recreativas para dar la bienvenida a los estudiantes.", date: "", color: "red" },
        { id: 9, icon: IconoFeria, title: "Ferias cientificas", description: "Exhibiciones y experimentos educativos donde los estudiantes muestran su creatividad y pasión por la ciencia.", date: "", color: "orange" },
        { id: 10, icon: IconoAfrocostarricense, title: "Dia de la cultura afrocostarricense", description: "Celebramos la rica herencia afrodescendiente con exposiciones culturales.", date: "", color: "blue" },
        { id: 11, icon: IconoAutismo, title: "Dia de la concientización del autismo ", description: "Actividades para informar y sensibilizar sobre el autismo, promoviendo la inclusión y el respeto.", date: "", color: "pink" }
    ])

    return (
        <main>
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