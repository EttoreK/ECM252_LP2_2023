import React from 'react'
import ReactDOM from 'react-dom'
// import <style.css>

// JSX: JavaScript Extension (XML)
const App = () => {
  const estiloBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroudcolor: 'blueviolet', color:'white', border:'none', width: '100%', borderRadius:8}
  const TextoDoRotulo = 'Nome:'
  const obterTextoBotao = () => "Enviar"
  const onClique = () => alert("clicou")

  return  <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            Meu primeiro componente React
            <label className='rotulo' htmlFor='nome' style={{display: 'block', marginBottom: 4}}>
              {TextoDoRotulo}
            </label>
            <input type='text' id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outiline:'none', width: '100%', borderRadius: 8, boxSizing: 'border-box'}} />
            <button style={estiloBotao}>
              {obterTextoBotao}
              {onClique}
            </button>
          </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
