import Afternoon from "../Images/Afternoon.png"

const Nosotros = () => {
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
        </main>
    )
}

export default Nosotros;