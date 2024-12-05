
const Galeria = () => {
    const imageNames = ["photo_1.jpg", "photo_2.jpg", "photo_3.jpg", "photo_4.jpg"];

    return (
        <section>
            <div className="galeryRow">
                <div className="galeryColumn">
                    <img src={`/GaleryImages/${imageNames[0]}`} alt="photo_1" />
                    <img src={`/GaleryImages/${imageNames[1]}`} alt="photo_2" />
                    <img src={`/GaleryImages/${imageNames[2]}`} alt="photo_3" />
                    <img src={`/GaleryImages/${imageNames[3]}`} alt="photo_4" />
                </div>

                <div className="galeryColumn">
                    <img src={`/GaleryImages/${imageNames[1]}`} alt="photo_1" />
                    <img src={`/GaleryImages/${imageNames[0]}`} alt="photo_2" />
                    <img src={`/GaleryImages/${imageNames[3]}`} alt="photo_3" />
                    <img src={`/GaleryImages/${imageNames[2]}`} alt="photo_4" />
                </div>

                <div className="galeryColumn">
                    <img src={`/GaleryImages/${imageNames[2]}`} alt="photo_1" />
                    <img src={`/GaleryImages/${imageNames[0]}`} alt="photo_2" />
                    <img src={`/GaleryImages/${imageNames[1]}`} alt="photo_3" />
                    <img src={`/GaleryImages/${imageNames[3]}`} alt="photo_4" />
                </div>
            </div>
        </section>
    )
}

export default Galeria