import ImagenEscuela from "../Images/EscuelaFoto.png"

const Home = () => {
    return (
        <section className="introductionContainer">
            <div className="introductionLabel">
                <label>
                    Escuela Nuevo Amanecer
                </label>
            </div>
            <div className="introductionImg">
                <div className="introductionDecoration"></div>
                <img src={ImagenEscuela} />
            </div>

        </section>
    )
}

export default Home;