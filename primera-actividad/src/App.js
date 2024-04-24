import logo from './logo.svg';
import './App.css';
import Contador from './practica/contador';
import Contclick from './practica/Contclick';
import Titulo from './practica/Titulo';
import Contador2 from './practica/Contador_2';



function app() {
    return(
        <div className="app">
            <Contador inicial="5" incremento="3" decremento="3"/>
            <Contador inicial="2" incremento="12" decremento="4"/>
            <Contador/>
            <Contclick/>
            <Titulo/>
            <Contador2/>
        </div>
    );
}
export default app;
