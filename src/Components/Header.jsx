import { useEffect, useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";

import Galeria from "./Galeria";
import Home from "./Home";
import Horarios from "./Horarios";
import Actividades from "./Actividades";
import Informacion from "./Informacion";

const Header = ({ setOption }) => {
    const [modo, setModo] = useState(<BsBrightnessHigh className="sunIcon" />)
    const [estado, setEstado] = useState(true)

    const handleClick = () => {
        if (estado) {
            setModo(<BsMoonStars className="moonIcon" />)
            setEstado(false)
        } else {
            setModo(<BsBrightnessHigh className="sunIcon" />)
            setEstado(true)
        }
    }

    const handleClickOptionMenu = (selected) => {
        setOption(selected)
    }

    useEffect(() => {
        document.body.className = estado ? 'lightTheme' : 'darkTheme';
    }, [estado])

    return (
        <header className="header">
            <div className="navigatorBar">
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Home></Home>)}><BsHouse className="homeButton" /></button>

                <button className="headerButton" onClick={() => handleClickOptionMenu(<Horarios></Horarios>)}>Horarios</button>
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Actividades></Actividades>)}>Actividades</button>
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Galeria></Galeria>)} >Galeria</button>
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Informacion></Informacion>)}>Información</button>

            </div>
            <aside><button className="changeThemeButton" onClick={handleClick}>{modo}</button></aside>
        </header>
    )
}

export default Header;