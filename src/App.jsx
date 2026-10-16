import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import ContadorRuim from './components/ContadorRuim';
import ContadorBom from './components/ContadorBom';

export default function App() {
  return (
    <>
     <ContadorRuim tipo="Contador Ruim" />
     <ContadorBom tipo="Contador Bom" />
    </>
  );
}

