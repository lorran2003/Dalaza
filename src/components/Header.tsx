import { faBars, faCartShopping, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <header className="flex justify-between">

            <div className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faUserCircle} width={35} />
                <h1>name for user</h1>
            </div>

            <div className="flex gap-5">
                <FontAwesomeIcon icon={faBars} width={35} />

                <FontAwesomeIcon icon={faCartShopping} width={35} />
            </div>

        </header>
    )
}
