import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplatesExpressions'
import Events from './components/Events'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/empresa">Empresa</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <a href="/ferramentas">Ferramentas</a>
          </li>
        </ul>
      </nav>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
    </>
  )

}

export default App
