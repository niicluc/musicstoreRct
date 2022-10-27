import "./ItemCount.css" ; 
import { useState } from 'react'
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

export default function ItemCount({ stock, initial }) {
    const [value, setValue] = useState(initial);

    function onAdd() {
        (stock) > value ? setValue(value + 1) : setValue(value + 0);
    }

    function onSubstract() {
        value !== 0 ? setValue(value - 1) : setValue(value + 0);
    }
    
    return (
        <div className="EstructuraGral">
        <div className="row">
            <div className="col-sm">
                <button className="ButtonDetalle" onClick={onAdd}><IoIosAddCircle/></button>
                </div>
                <div className="col-sm">
                <p className="h5">{value}</p>
                </div>
                <div className="col-sm">
                <button className="ButtonDetalle" onClick={onSubstract}> <IoIosRemoveCircle/> </button>
                </div>
            </div>
            </div>
    );

}