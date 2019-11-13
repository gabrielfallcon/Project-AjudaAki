import React from 'react';

import Formulario from './components/ajuda/form'
import Lista      from './components/ajuda/list'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/jquery/dist/jquery.min'

import './App.css';
// import './source-code-pro/source-code-pro.css'


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>

          <div className="textHeader">
            <h1>Dev<span>Help</span></h1>

            <small>ache sua ajuda</small>

          </div>

          <div className="buttonNav">
            <a href="#lista" id="entrar">Procurar</a>
            
          </div>

        </header>

        <main>

          <section className="duvida">

            <div className="textSection">
              <h1>Qual é a sua dúvida hoje ?</h1>
              <p>Essa plataforma foi feita para ajudar seu dia dia!</p>
            </div>

            <div className="imgSection">
            </div>

          </section>

          <section className="listSection" id="lista">
            <Lista/>
          </section>

          <section className="formSection border-right pl-3 pr-3">
            <Formulario/>
          </section>


        </main>

      </div>
    );
  }
}


