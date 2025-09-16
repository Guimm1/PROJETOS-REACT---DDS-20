import React from 'react'

import ImgNeymar from "../assets/Xbesta.png"


const MostrarImagens = () => {
  return (
    <div>
        {/* Imagens via link externo */}
        <h3>Guku</h3>
        <img src="https://i.redd.it/how-stupid-is-goku-in-z-compared-to-super-v0-uyir8ykye2ff1.png?width=1029&format=png&auto=webp&s=dc0a5846f2ffb22ae5146fc15a8e7ef5d3b2ef48" alt="" 
        width={900} 
        height={500} 
        />

        {/* Imagem via pasta assets */}
        <h3>Legal</h3>
        <img src={ImgNeymar} alt="" width={900} height={500} />

        {/* Imagens via pasta pública */}
        <h3>É</h3>
        <img src="../foguete-do-clash-royale.png
        " alt="" width={900} height={500}/>
    </div>
  )
}

export default MostrarImagens