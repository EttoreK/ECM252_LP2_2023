import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
//useState é um hook (a partir da versão 16.8)
class App extends React.Component {
  cliente = null

  state = {pics: []}

  componentDidMount(){
    this.client = createCliente(env.PEXELS_KEY)
  }

  onBuscaRealizada = async (termo) => {
    // const result = await this.client.photos.serach({
    //   query: termo
    // })
    // this.setState({pics: result.photos})
    pexelsClient.get('/search', {
      params: {query: termo, par_page: 5}
    })
    .then(result => {
      this.state.pics
    })
  }
  render(){
    return (
      <div 
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
          <div className="col-12">
            <PexelsLogo/>
          </div>
          <div className="col-12">
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className="col-8">
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </div>
          <div className="col-12">
            <div className="grid">
              <ListaImagens 
                pics={this.state.pics}
                imsStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}/>
            </div>
          </div>
      </div>
    )
  }
}


export default App

/* {
  this.state.pics.map((pic, indice) => {
    return(
      <div key={indice}>
        <img src={pic.src.small} alt={pic.alt} />
      </div>
    )
  })
} */