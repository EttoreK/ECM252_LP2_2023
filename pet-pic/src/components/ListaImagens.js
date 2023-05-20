import React from 'react'
import Imagem from './imagem'

const ListaImagens = () => {
  return (
    pics.map((pic) => {
        return(
            <Imagem
                url = {pic.src.small}
                alt={pic.alt}
            />
        )
    })
  )
}

export default ListaImagens