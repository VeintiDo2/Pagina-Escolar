import { AiOutlineFacebook } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { TbPhone } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <a href="https://www.facebook.com/EscuelaNuevoAmaneceroficial/?locale=es_LA" target="_blank">
                    <AiOutlineFacebook className="footerIcons" />
                </a>
            </section>
            <section>
                <a href="mailto:esc.nuevoamanecer@mep.go.cr" ><CgMail className="footerIcons" /></a>
                <TbPhone className="footerIcons" /> 2760-1061
            </section>
        </footer>
    )
}

export default Footer;