import { useEffect, useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";

const Header = () => {
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

    useEffect(() => {
        document.body.className = estado ? 'lightTheme' : 'darkTheme';
    }, [estado])

    return (
        <header className="header">
            <navigator className="navigatorBar">
            <button className="headerButton"><BsHouse className="homeButton" /></button>
                <button className="headerButton">Horarios</button>
                <button className="headerButton">Actividades</button>
                <button className="headerButton">Galeria</button>
                <button className="headerButton">Información</button>
            </navigator>
            <aside><button className="changeThemeButton" onClick={handleClick}>{modo}</button></aside>
        </header>
    )
}

export default Header;