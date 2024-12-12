
const Galeria = () => {
    const imageNames = ["photo_1.jpg", "photo_2.jpg", "photo_3.jpg", "photo_4.jpg", "photo_5.jpg", "photo_6.jpg", "photo_7.jpg", "photo_8.jpg",
        "photo_9.jpg", "photo_10.jpg", "photo_11.jpg", "photo_12.jpg", "photo_13.jpg", "photo_14.jpg", "photo_15.jpg", "photo_16.jpg",
        "photo_17.jpg", "photo_18.jpg", "photo_19.jpg", "photo_20.jpg", "photo_21.jpg", "photo_22.jpg", "photo_23.jpg", "photo_24.jpg"
    ];

    return (
        <section>
            <div className="galeryRow">
                <div className="galeryColumn">
                    <img src={`/GaleryImages/${imageNames[0]}`} alt="photo_1" />
                    <img src={`/GaleryImages/${imageNames[21]}`} alt="photo_22" />
                    <img src={`/GaleryImages/${imageNames[2]}`} alt="photo_3" />
                    <img src={`/GaleryImages/${imageNames[22]}`} alt="photo_23" />
                    <img src={`/GaleryImages/${imageNames[5]}`} alt="photo_6" />
                    <img src={`/GaleryImages/${imageNames[6]}`} alt="photo_7" />
                    <img src={`/GaleryImages/${imageNames[19]}`} alt="photo_20" />
                </div>

                <div className="galeryColumn">
                    <img src={`/GaleryImages/${imageNames[7]}`} alt="photo_8" />
                    <img src={`/GaleryImages/${imageNames[8]}`} alt="photo_9" />
                    <img src={`/GaleryImages/${imageNames[9]}`} alt="photo_10" />
                    <img src={`/GaleryImages/${imageNames[10]}`} alt="photo_11" />
                    <img src={`/GaleryImages/${imageNames[11]}`} alt="photo_12" />
                    <img src={`/GaleryImages/${imageNames[12]}`} alt="photo_13" />
                    <img src={`/GaleryImages/${imageNames[20]}`} alt="photo_21" />
                </div>

                <div className="galeryColumn">
                    <img src={`/GaleryImages/${imageNames[13]}`} alt="photo_14" />
                    <img src={`/GaleryImages/${imageNames[14]}`} alt="photo_15" />
                    <img src={`/GaleryImages/${imageNames[15]}`} alt="photo_16" />
                    <img src={`/GaleryImages/${imageNames[16]}`} alt="photo_17" />
                    <img src={`/GaleryImages/${imageNames[17]}`} alt="photo_18" />
                    <img src={`/GaleryImages/${imageNames[18]}`} alt="photo_19" />
                    <img src={`/GaleryImages/${imageNames[23]}`} alt="photo_24" />
                </div>
            </div>
        </section>
    )
}

export default Galeria