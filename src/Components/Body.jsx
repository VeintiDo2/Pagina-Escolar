import ImagenEscuela from "../Images/EscuelaFoto.png"

const Body = () => {
    return (
        <main className="mainContent">
            <section className="introductionContainer">
                <div className="introductionLabel">
                    <label>
                        Escuela Nuevo Amanecer
                    </label>
                </div>
                <div className="introductionImg">
                    <img src={ImagenEscuela} />
                </div>
            </section>
            <section>
                <article>
                    <img className="xd" src={ImagenEscuela} alt="" />
                </article>
            </section>

        </main>
    )
}

export default Body