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
import Nosotros from "./Nosotros";
import CustomSelect from "./CustomSelect";
import RecursosYServicios from "./RecursosYServicios";
import Valores from "./Valores";

const Header = ({ setOption }) => {
    const [modo, setModo] = useState(<BsBrightnessHigh className="sunIcon" />)
    const [estado, setEstado] = useState(true)
    const [iconoModo, setIconoModo] = useState(<IoMenu className="menuIcon" />)
    const [iconoClicked, setIconoClicked] = useState(true)

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    //Array de objetos con los componentes. label: nombre del option, value: ID, Components: Componente que se mostrara 
    const options = [
        { label: 'Nosotros', value: '1', components: <Nosotros /> },
        { label: 'Recursos y servicios', value: '2', components: <RecursosYServicios /> },
        { label: 'Valores institucionales', value: '3', components: <Valores /> },
    ];

    //Restablecer
    const reset = () => {
        const dropDownMenu = document.querySelector(".dropDownMenu")
        return (
            dropDownMenu.classList.remove("click"),
            setIconoModo(<IoMenu className="menuIcon" />),
            setIconoClicked(true)
        )
    }

    //función para cambiar el boton de Cambio de tema (oscuro/claro)
    const handleClick = () => {
        if (estado) {
            setModo(<BsMoonStars className="moonIcon" />)
            setEstado(false)
        } else {
            setModo(<BsBrightnessHigh className="sunIcon" />)
            setEstado(true)
        }
    }

    //Función para cambiar el componente del body
    const handleClickOptionMenu = (selected) => {
        setOption(selected)
    }


    useEffect(() => {
        document.body.className = estado ? 'lightTheme' : 'darkTheme';
    }, [estado])

    //Cambiar el tema e icono
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
                <aside><button className="generalButton" onClick={() => handleClickOptionMenu(<Home />)}><BsHouse /></button></aside>
                <div className="navigatorBar">
                    <button className="generalButton" onClick={() => handleClickOptionMenu(<Horarios />)}>Horarios</button>
                    <button className="generalButton" onClick={() => handleClickOptionMenu(<Actividades />)}>Actividades</button>
                    <button className="generalButton" onClick={() => handleClickOptionMenu(<Galeria />)} >Galeria</button>
                    <CustomSelect options={options}
                        placeholder="Información"
                        onSelect={handleSelect}
                        setOption={setOption}
                    ></CustomSelect>
                </div>
                <button onClick={() => { showMenu() }} className="homeGeneralButton" >{iconoModo}</button>
                <aside><button className="generalButton" onClick={handleClick}>{modo}</button></aside>
            </header>

            <div className="dropDownMenu">
                <button className="generalButton" onClick={() => { reset(), handleClickOptionMenu(<Horarios />) }}>Horarios</button>
                <button className="generalButton" onClick={() => { reset(), handleClickOptionMenu(<Actividades />) }}>Actividades</button>
                <button className="generalButton" onClick={() => { reset(), handleClickOptionMenu(<Galeria />) }} >Galeria</button>
                <button className="generalButton" onClick={() => { reset(), handleClickOptionMenu(<Nosotros />) }} >Nosotros</button>
                <button className="generalButton" onClick={() => { reset(), handleClickOptionMenu(<RecursosYServicios />) }} >Recursos Y Servicios</button>
                <button className="generalButton" onClick={() => { reset(), handleClickOptionMenu(<Valores />) }} >Valores</button>
            </div>
        </main>
    )
}
export default Header;