import { useState } from "react"

import Factura from "../Images/bill.png"
import Cedula from "../Images/dni.png"
import Foto from "../Images/picture.png"
import Acta from "../Images/birth-certificate.png"

const MatriculaCard = ({ icon, body, position }) => {
    if (position == "left") {
        return (
            <div className={`matricula-requisito ${position}`}>
                <img src={icon} />
                <p>{body}</p>
            </div>
        );
    } else {
        return (
            <div className={`matricula-requisito ${position}`}>
                <p>{body}</p>
                <img src={icon} />
            </div>
        );
    }
}

const Matricula = () => {
    const [requisitos, setRequisitos] = useState([
        { id: 1, icon: Factura, body: "Factura del agua o luz.", position: "left" },
        { id: 2, icon: Cedula, body: "Fotocopia por ambos lados de la cédula del encargado.", position: "right" },
        { id: 3, icon: Foto, body: "Foto tamaño pasaporte del niño/a.", position: "left" },
        { id: 4, icon: Acta, body: "Acta de nacimiento del niño/a.", position: "right" }
    ])

    return (
        <section className="matricula-container">
            <h1>Matrícula</h1>
            <h3>¿Qué requisitos debo cumplir?</h3>
            <article className="matricula-requisitos-container">
                {Object.values(requisitos).map(requisito =>
                    <MatriculaCard
                        key={requisito.id}
                        icon={requisito.icon}
                        body={requisito.body}
                        position={requisito.position}
                    />
                )}
            </article>
        </section>
    )
}

export default Matricula