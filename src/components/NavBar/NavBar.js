import CarWidget from "../CarWidget/CarWidget";
import "./NavBar.css" ;
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <div className="Nav-Bar">
            <ul class="nav justify-content-center">
            <li class="nav-item">
            <Link to='/'><img src="https://res.cloudinary.com/ddnw5orwf/image/upload/v1667861756/logos/logo4_mji8x4.png"/></Link>
                </li>
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
  <button class="categoriasBoton  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias
  </button>
  <ul class="dropdown-menu">
    <li><Link to="/category/cd" class="dropdown-item" href="#">Discos</Link></li>
    <li><Link to="/category/vinillo" class="dropdown-item" href="#">Vinilllos</Link></li>
    <li><Link to="/category/cassette" class="dropdown-item" href="#">Cassettes</Link></li>
  </ul>
  <li> <CarWidget/> </li>
            </ul>
            </div>
        </div>
    )
}

export default NavBar ;