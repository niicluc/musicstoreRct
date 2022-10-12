import CarWidget from "../CarWidget/CarWidget";
import "./NavBar.css" ;

function NavBar () {
    return (
        <div>
            <div className="Nav-Bar">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Novedades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Promos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Envios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contactos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Discos</a>
                </li>
            </ul>
            <CarWidget/>
            </div>
        </div>
    )
}

export default NavBar ;