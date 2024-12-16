import Morning from "../Images/Morning.png"
import Afternoon from "../Images/Afternoon.png"


const Horarios = () => {
    return (
        <section className="schedule-plan-container">
            <h2>Horarios</h2>
            <article className="schedule-container">
                <div>
                    <article>
                        <img src={Morning} />
                    </article>
                    <article>
                        <h3>Mañana</h3>
                        <p>7 a.m. a 12:10 m.d. </p>
                    </article>
                </div>
                <div>
                    <article>
                        <img src={Afternoon} />
                    </article>
                    <article>
                        <h3>Tarde</h3>
                        <p>12:30 m.d a 5:40 p.m.</p>
                    </article>

                </div>
            </article>

            <h2>Plan de estudio</h2>

            <article className="plan-container">
                <table>
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Clases por semana</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Español</td>
                            <td>8 clases</td>
                        </tr>
                        <tr>
                            <td>Ciencias</td>
                            <td>4 clases</td>
                        </tr>
                        <tr>
                            <td>Estudios Sociales</td>
                            <td>4 clases</td>
                        </tr>
                        <tr>
                            <td>Matemática</td>
                            <td>8 clases</td>
                        </tr>
                        <tr>
                            <td>Ingles</td>
                            <td>3 - 5 clases</td>
                        </tr>
                        <tr>
                            <td>Informática</td>
                            <td>2 clases</td>
                        </tr>
                        <tr>
                            <td>Religión</td>
                            <td>2 clases</td>
                        </tr>
                        <tr>
                            <td>Educación Fisica</td>
                            <td>2 clases</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default Horarios;