import React from "react";
import {useState} from "react";

/*function Formulario(){
    return(
        <form>
            <input name="nombre" type="text" placeholder="Nombre"/>
        </form>
    )
}*/

/*function Formulario(){
    const [name,setName]=useState("");

    return(
        <form>
            <label>Introduzca su nombre:
                <input type="text" value={name} name="name" placeholder="nombre"
                onChange={(evento)=>setName(evento.target.value)}/>
            </label>
        </form>
    )
}
// el label se puedo o no usar
*/

/*function Saludo({name}){
    return <p>Hola, {name}!</p>
}

function Formulario(){
    const [nombre,setNombre]=useState("");

    return(
        <div>
            <form>
                <label> Ingrese Nombre:
                    <input name="nombre" type="text" value={nombre} placeholder="Nombre"
                    onChange={(e)=>setNombre(e.target.value)}/>
                </label>
            </form>
            <Saludo name = {nombre}/>
        </div>
    );
}*/

/*function Saludo({name}){
    return <p>Hola, {name}!</p>
}

function Formulario(){
    const [nombre,setNombre]=useState("");

    const Sumision=(evento)=>{
        evento.preventDefault();
        console.log("Enviando"+nombre);
    }

    return(
        <div>
            <form onSubmit={Sumision}>
                <label> Ingrese Nombre:
                    <input name="nombre" type="text" value={nombre} placeholder="Nombre"
                    onChange={(e)=>setNombre(e.target.value)}/>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
            <Saludo name = {nombre}/>
        </div>
    );
}*/

function Saludo({name}){
    return <p>Hola, {name}!</p>
}

function Formulario(){
    const [entradas,setEntradas]=useState("");
    const Cambios=(event)=>{
        const nombre=event.target.name;
        const valor=event.target.value;
        setEntradas(valores=>({...valores,[nombre]:valor}))
    }
    const Sumision=(event)=>{
        event.preventDefault();
        console.log("Enviando "+entradas.nombre+" "+entradas.edad)
        alert(entradas.nombre+" "+entradas.edad);
    }
    return(
        <div>
            <form onSubmit={Sumision}>
                <label> Ingrese Nombre:
                    <input name="nombre" type="text" value={entradas.nombre||""} placeholder="Nombre"
                    onChange={(evento)=>Cambios(evento)}/>
                </label>
                <label>Ingrese Edad:
                    <input name="Edad" type="number" value={entradas.edad||""} placeholder="Edad"
                    onChange={(evento)=>Cambios(evento)}></input>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
            <Saludo name = {entradas.nombre||""}/>
        </div>
    );
}
export default Formulario;