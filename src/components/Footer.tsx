import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer>
            <div className="flex justify-center items-center gap-5">
                <p>Carrinho</p>
                <p>Favoritos</p>
                <p>Perfil</p>
                <p>Quem somos</p>
            </div>

            <div className="flex justify-center items-center gap-5 py-5">
                <FontAwesomeIcon icon={faInstagram} width={30} />

                <FontAwesomeIcon icon={faWhatsapp} width={30} />
            </div>
        </footer>
    )
}
