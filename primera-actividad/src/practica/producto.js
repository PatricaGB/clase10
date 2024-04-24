import React from "react";

function Producto(props){
    return(
        <div>
            <h1>{props.nombre}</h1>
            <imag src={props.image} alt={props.alternativo}></imag>
            <p>{props.descripcion}</p>
            <p>${props.precio}</p>
        </div>
    );
}

export default Producto;