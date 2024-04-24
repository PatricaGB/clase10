import logo from './logo.svg';
import './App.css';
import Saludo from './practica/saludo';
import Saludo2 from './practica/saludo2';
import Producto from './practica/producto';


const elemento =<h1>Hola Mundo</h1>
const name="Pat"
const elemento2=<h2>Hola {name}</h2>

function app() {
    return(
        <div className="app">
            {elemento}
            {elemento2}
            <Saludo/>
            <Saludo2/>
            <Producto nombre="Mesa" descripcion="elemento de oficina" precio={500}/>
            <Producto nombre="Vestido" imagen="/logo192.png" alternativo="imagen de vestido" descripcion="prenda para mujer" precio={25000}/>
        </div>
    );
}
export default app;
