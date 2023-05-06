import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Pedido from './Pedido.js';
import Cartao from './Cartao.js';

const App = () => {
  return (
    <div className="container border rounded mt-2">
      <div className="row border bottom my-2">
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho = "22/04/2021">
            <Pedido 
              icone ="fa-solid fa-hard-drive fa-2x"
              nome = "SSD"
              descricao = "SSD Kingston A400 - SATA"
            />
          </Cartao>
        </div>

        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho = "23/04/2021">
            <Pedido 
              icone = "fa-solid fa-book fa-2x"
              nome = "Livro"
              descricao = "Algoritmos - Teoria e Prática - Cormen"
            />  
          </Cartao>
        </div>

        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho = "24/04/2021">
            <Pedido 
              icone = "fa-solid fa-laptop fa-2x"
              nome = "Notebook"
              descricao = "Notebook Dell - 16 GB i5"
            />
          </Cartao>
        </div>

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("#root"));