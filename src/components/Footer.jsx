import './Style.module.scss'
import logoFacebook from "../assets/logoFacebook.png"
import logoInstagram from "../assets/logoInstagram.png"
import logoLinkedin from "../assets/logoLinkedin.png"


export default function Footer(){
    return(
        <footer>
            <section>
                <img src={logoLinkedin} alt="Logo do linkedin" />
                <img src={logoFacebook} alt="Logo do facebook" />
                <img src={logoInstagram} alt="Logo do instagram" />
            </section>
        </footer>
    )
}