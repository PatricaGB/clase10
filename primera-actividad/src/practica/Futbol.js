import React from "react";

function Futbol(){
   /* const anotacion=(valor)=>{
        console.log(valor);
    };
    return(
        <button
        onClick={()=>anotacion("Gool")}
        >Disparo
        </button>
    ) //primera forma de usar la funcion*/
    const anotacion=(valor,evento)=>{
        console.log(valor+" "+evento.type);
    };
    return(
        <button
        onClick={(evento)=>anotacion("Gool",evento)}
        >Disparo
        </button>
    )

}
export default Futbol;