import { useState } from "react";

import Telephone from "../Images/telephone.png"
import Gmail from "../Images/gmail.png"
import Responsabilidad from "../Images/responsibility.png"
import Solidaridad from "../Images/solidarity.png"
import Tolerancia from "../Images/tolerance.png"
import Equidad from "../Images/equity.png"
import Respeto from "../Images/respect.png"
import Paz from "../Images/peace.png"
import Justicia from "../Images/justice.png"
import Honestidad from "../Images/honest.png"
import Lealtad from "../Images/loyalty.png"

import ValoresCard from "./ValoresCard"

const Nosotros = () => {
    const [valores, setValores] = useState([
        { id: 1, title: "Responsabilidad", body: "La responsabilidad es una obligación, ya sea moral o incluso legal de cumplir con lo que se ha comprometido.", icon: Responsabilidad },
        { id: 2, title: "Solidaridad", body: "Colaborar en todos los campos, para el buen desarrollo de los funciones de cada uno de los integrantes de un proyecto, en busca de una meta para un bien común.", icon: Solidaridad },
        { id: 3, title: "Tolerancia", body: "Hablar de tolerancia es hablar del respeto a la diferencia de ideas y posturas respecto de algún tema, o de la vida misma.", icon: Tolerancia },
        { id: 4, title: "Equidad", body: "Cualidad que consiste en dar a cada uno lo que se merece en función de sus méritos o condiciones.", icon: Equidad },
        { id: 5, title: "Respeto", body: "Hablar de respeto es hablar de los demás. Es establecer hasta donde llegan mis posibilidades de hacer o no hacer, y dónde comienzan las posibilidades de los demás. El respeto es la base de toda convivencia en sociedad.", icon: Respeto },
        { id: 6, title: "Paz", body: "Nuestra institución pone todos sus esfuerzos en lograr una cultura de paz en sus aulas, y más allá de ellas. En la búsqueda constante de la comprensión y la armonía en las relaciones sociales y resolución alternativa de conflictos.", icon: Paz },
        { id: 7, title: "Justicia", body: "Dar a cada quien el derecho que le corresponde; lo que merece y necesita; practicar la igualdad de oportunidades y la equidad en el trato.", icon: Justicia },
        { id: 8, title: "Honestidad", body: "Es una forma de vivir congruente entre lo que piensas y la conducta que se observa hacia el prójimo, que junto a la justicia, exige dar a cada quien lo que le es debido.", icon: Honestidad },
        { id: 9, title: "Lealtad", body: "Característica que conlleva al ser humano a ser fiel y agradecido a una persona o entidad, la lealtad consiste en nunca abandonar o dejar a su suerte a una persona, grupo social o país. Lo contrario a lealtad es traición, nunca traicionar a una persona o nación es ser leal.", icon: Lealtad },
    ])

    return (
        <main className="nosotros-main-container">
            <section className="nosotros-img-introduccion">
                <div className="gradient-overlay"></div>
                <span>Escuela Nuevo Amanecer</span>
                <p>Todo sobre nosotros</p>
            </section>

            <section className="nosotros-VisionMision-container">
                <div>
                    <h1>Visión</h1>
                    <p>Ser una institución líder en una educación integral y de calidad que genere
                        en los estudiantes un alto sentido de pertenencia y compromiso.
                    </p>
                </div>
                <div>
                    <h1>Misión</h1>
                    <p>La escuela Nuevo Amanecer es una institución educativa que ofrece procesos
                        de enseñanza y aprendizaje tomando en cuenta el ambiente sociocultural en
                        que se desarrolla la población estudiantil, promoviendo una cultura de paz
                        de forma activa y creativa.
                    </p>
                </div>
            </section>

            <section className="nosotros-Datos-container">
                <h1>¿Cómo me contacto con la escuela?</h1>
                <article>
                    <div>
                        <img src={Telephone} />
                        2760-1061
                    </div>
                    <div>
                        <img src={Gmail} />
                        esc.nuevoamanecer@mep.go.cr
                    </div>
                </article>
            </section>

            <section className="nosotros-Valores-container">
                <h1>Valores institucionales</h1>
                {Object.values(valores).map(valor => (
                    <ValoresCard key={valor.id}
                        title={valor.title}
                        body={valor.body}
                        icon={valor.icon}
                    ></ValoresCard>
                ))}
            </section>
        </main>
    )
}

export default Nosotros;