
import "./styles.css";

// import { num } from "./botones/index.jsx";

export const Resultado = ( {valor} ) =>  {

    let num: number = 0;

    return (
        <div className="resultado">
            <p>{valor}</p>
        </div>
    )
}