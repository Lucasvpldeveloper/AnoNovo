import './Style.module.scss'
import logoFacebook from "../assets/logoFacebook.png"
import logoInstagram from "../assets/logoInstagram.png"
import logoLinkedin from "../assets/logoLinkedin.png"


export default function Footer(){
    return(
        <footer>
            <section>
                <a href="https://www.linkedin.com/in/lucas-vpl-5b65aa31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='blank'><img src={logoLinkedin} alt="Logo do linkedin" /></a>
                <a href="https://www.facebook.com/lucas.leite.52035?locale=pt_BR%5C" target='blank'><img src={logoFacebook} alt="Logo do facebook" /></a>
                <a href=""><img src={logoInstagram} alt="Logo do instagram" /></a>
                    
            </section>
        </footer>
    )
}

