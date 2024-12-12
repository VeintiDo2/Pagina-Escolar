import { useState } from "react"
import RecYServCard from "./RecursosYServiciosCard"

import AsideImage from "/GaleryImages/photo_25.jpg"
import Languajes from "../Images/Languages.png"
import Informatica from "../Images/Informatica.png"
import Apoyo from "../Images/Apoyo.png"
import Preescolar from "../Images/Kindergarten.png"
import Comedor from "../Images/meal.png"
import Convivir from "../Images/teamwork.png"
import Departamentos from "../Images/united.png"

const RecursosYServicios = () => {
    const [recYServData, setRecYServData] = useState([
        { id: 1, icon: Languajes, title: "Lengua extranjera" },
        { id: 2, icon: Informatica, title: "Aula de informática" },
        { id: 3, icon: Apoyo, title: "Servicios de apoyo" },
        { id: 4, icon: Preescolar, title: "Aulas de materno y kínder" },
        { id: 5, icon: Comedor, title: "Comedor" },
        { id: 6, icon: Convivir, title: "Programa convivir" },
        { id: 7, icon: Departamentos, title: "Departamento Educación Religiosa, Cultura y Paz" },
    ])

    return (
        <main className="recyserv-container">
            <aside>
                <img className="recyserv-aside-image" src={AsideImage} />
            </aside>
            <section>
                <article className="recyserv-title-container">
                    <span>Recursos y Servicios </span>
                </article>
                <article className="recyserv-container-components">
                    {Object.values(recYServData).map(Data =>
                        <RecYServCard key={Data.id} icon={Data.icon} title={Data.title} ></RecYServCard>
                    )}
                </article>
            </section>
        </main>
    )
}

export default RecursosYServicios