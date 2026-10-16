import { useState } from "react";

export default function ContadorBom(props) {
  const [contador, setContador] = useState(0);

  return (
    <>
    <h2>{props.tipo}</h2>
    <button onClick={() =>
      setContador(contador + 1)}>
      Cliques: {contador}
    </button>
    </>

  );
}