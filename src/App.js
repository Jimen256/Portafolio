
import './App.css';
import Navegacion from './components/ResponsiveAppBar'
import Frase from './components/inicio'
import Info from './components/sobremi'
import Piepag from './components/footer'
import Habilid from './components/habilidades'
import Proyecto from './components/Proyectos'


function App() {
  return (
    <div>
      <section className="inicio">
        <Navegacion id = "Proyectos"/>
        <Frase/>
      </section>
      <section  id='sobre%20mi'>
      <Info />
      </section>
      <section className='sect-hab' id='habilidades'>
      <div className='caja-hab'>
       <h1 className='hab'>Habilidades</h1>
        <Habilid/>
       </div>
      </section>
      <section id='proyectos'>
       <Proyecto/>
      </section>
      <footer>
      <Piepag/>
      </footer>
    </div>
  );
}

export default App;
