import { discosCatalogo } from '../components/Container/ItemListContainer';
import "./ItemDetailContainer.css" ;
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';


const ItemDetailContainer = () => {
  const{id}=useParams()
    console.log(id)
    const [detalleCd, setDetalleCd ] = useState([null])
    useEffect(()=> {
      const cdEncontrado = discosCatalogo.filter(disco => disco.id==id)
      setDetalleCd(cdEncontrado)
      console.log("cd encontrado: "+ cdEncontrado)
    },[id])
    return (
    <div>
      {
        detalleCd.map(disco=> {
          return(
          <div key={disco?.id}> 
        <div className="Container-General">
          <div className="card">
            <h2>{disco?.name}</h2>
            <h4>{disco?.fecha}</h4>
            <img alt={`Disco ${disco?.name}`} src={disco?.image}/>
            <h4>Tracks:</h4>
            <h4>{disco?.canciones}</h4>
            <p>En stock: Si</p>
            <Link to="/" type="button" class="btn btn-outline-dark">Volver</Link>
          </div>
        </div>

          
          </div>
          )
        })
      }
    </div>
  )
}

export default ItemDetailContainer