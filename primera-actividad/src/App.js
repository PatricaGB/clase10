import logo from './logo.svg';
import './App.css';
import Futbol from './practica/Futbol';
import Formulario from './practica/Formulario';



function app() {
    return(
        <div className="app">
            <Futbol/>
            <Formulario/>
        </div>
    );
}
export default app;
