export default function ContadorRuim(props) {
  let contador = 0;

  return (
    <>
    <h2>{props.tipo}</h2>
     <button onClick={() => contador++}>
      Cliques: {contador}
     </button>
    </>

  );
}