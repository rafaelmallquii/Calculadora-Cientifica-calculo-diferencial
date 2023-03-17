// numero de entrada de la boleteria 87310

import "./styles.css";

export type BotonProps = {
  setValor: React.Dispatch<React.SetStateAction<string>>;
  valor: string;
};

export const Boton = ({ setValor, valor } : BotonProps) => {

  const calcularResultado = (): void => {
    const resultado = eval(valor);
    setValor(resultado);
  
  };

  const borraResultado = (): void => {
    setValor("");
  };

  const evento = (e) => {
    const valorActual = e.target.textContent;
    const valorAnterior = valor[valor.length - 1];

    if (valor.length === 0 && isNaN(valorActual)) return;

    if (!isNaN(valorActual) || valor.length === 0) {
      setValor((valor) => valor + e.target.textContent);
    }

    if (!isNaN(Number(valorAnterior)) && isNaN(valorActual)) {
      setValor((valor) => valor + e.target.textContent);
    }
  };

  return (
    <>
      <div className="botones">
        <button className="color-botones" onClick={borraResultado}>
          AC
        </button>
        <button className="color-botones" onClick={evento}>
          CE
        </button>
        <button className="color-botones" onClick={evento}>
          %
        </button>
        <button className="color-botones" onClick={evento}>
          /
        </button>
        <button className="color-botones" onClick={evento}>
          7
        </button>
        <button className="color-botones" onClick={evento}>
          8
        </button>
        <button className="color-botones" onClick={evento}>
          9
        </button>
        <button className="color-botones" onClick={evento}>
          *
        </button>
        <button className="color-botones" onClick={evento}>
          4
        </button>
        <button className="color-botones" onClick={evento}>
          5
        </button>
        <button className="color-botones" onClick={evento}>
          6
        </button>
        <button className="color-botones" onClick={evento}>
          -
        </button>
        <button className="color-botones" onClick={evento}>
          1
        </button>
        <button className="color-botones" onClick={evento}>
          2
        </button>
        <button className="color-botones" onClick={evento}>
          3
        </button>
        <button className="color-botones" onClick={evento}>
          +
        </button>
        <button className="color-botones" onClick={evento}>
          0
        </button>
        <button className="color-botones" onClick={evento}>
          .
        </button>
        <button className="color-botones" onClick={calcularResultado}>
          =
        </button>
      </div>
    </>
  );
};
