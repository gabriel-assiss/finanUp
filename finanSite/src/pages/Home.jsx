import Navbar from '../components/navbar.jsx'
import Layout2colunas from '../components/Layout2olunas.jsx'
import Fotos from '../components/Fotos.jsx'
import Baixar from '../components/Baixar.jsx'
import Final from '../components/Fundo.jsx'
import { useRef } from 'react'

export default function Home() {
  const quizRef = useRef(null);

  return (
    <div className='App'>
      <Navbar quizRef={quizRef} />
      <Layout2colunas />
      <Fotos />
      <Baixar refToScroll={quizRef} />
      <Final />
    </div>
  );
}
