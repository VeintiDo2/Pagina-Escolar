import { useEffect, useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";

import Galeria from "./Galeria";
import Home from "./Home";
import Horarios from "./Horarios";
import Actividades from "./Actividades";
import Informacion from "./Informacion";

const Header = ({ setOption }) => {
    const [modo, setModo] = useState(<BsBrightnessHigh className="sunIcon" />)
    const [estado, setEstado] = useState(true)
    const [iconoModo, setIconoModo] = useState(<IoMenu className="menuIcon" />)
    const [iconoClicked, setIconoClicked] = useState(true)

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

    const showMenu = () => {
        if (iconoClicked) {
            setIconoModo(<HiXMark className="menuIcon" />)
            setIconoClicked(false)
        } else {
            setIconoModo(<IoMenu className="menuIcon" />)
            setIconoClicked(true)
        }
        const dropDownMenu = document.querySelector(".dropDownMenu")
        return dropDownMenu.classList.toggle("click")
    }

    return (
        <main className="mainHeader">
            <header className="header">
                <aside><button className="homeButton" onClick={() => handleClickOptionMenu(<Home></Home>)}><BsHouse /></button></aside>
                <div className="navigatorBar">
                    <button className="headerButton" onClick={() => handleClickOptionMenu(<Horarios></Horarios>)}>Horarios</button>
                    <button className="headerButton" onClick={() => handleClickOptionMenu(<Actividades></Actividades>)}>Actividades</button>
                    <button className="headerButton" onClick={() => handleClickOptionMenu(<Galeria></Galeria>)} >Galeria</button>
                    <button className="headerButton" onClick={() => handleClickOptionMenu(<Informacion></Informacion>)}>Información</button>
                </div>
                <button onClick={() => showMenu()} className="menuButton" >{iconoModo}</button>
                <aside><button className="changeThemeButton" onClick={handleClick}>{modo}</button></aside>
            </header>

            <div className="dropDownMenu">
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Horarios></Horarios>)}>Horarios</button>
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Actividades></Actividades>)}>Actividades</button>
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Galeria></Galeria>)} >Galeria</button>
                <button className="headerButton" onClick={() => handleClickOptionMenu(<Informacion></Informacion>)}>Información</button>
            </div>
        </main>
    )
}

export default Header;