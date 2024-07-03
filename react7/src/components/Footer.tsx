import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterStyle from "./Footer.module.css"
 
const Footer = () => {
  return (
    <footer className={FooterStyle.social_icons}>
        <ul>
            <li><FaInstagram /></li>
            <li><FaFacebook /></li>
            <li><FaLinkedin /></li>
        </ul>
    </footer>
  )
}

export default Footer