import {Titulo}  from './titulos/index.jsx'
import {Boton} from './botones'
import{Resultado} from './resultado'
import { useState } from 'react'



export const Main:any = ():JSX.Element => {

    const [valor, setValor ] = useState<string>('');
    const [resultado, setResultado] = useState('');



 return (<div>

      <Titulo />
      <Resultado valor={valor} />
      <Boton setValor={setValor} valor={valor} />

    </div>
    );
}