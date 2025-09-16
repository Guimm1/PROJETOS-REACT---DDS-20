import React from 'react'

const TemplateExpressions = () => {
    //Aqui vai códigos javascript
    let nome = "Guilherme"

    let jogador = {
        nome:"Aspas",
        time:"Mibr",
        jogo:"Valorant",
        nivel:"Muito bom"
    }
  return (
    //Aqui vai códigos html
    <div>
        <h2>Olá, meu nome é {nome}</h2>
        <p>O {jogador.nome} se perdeu</p>
        <p>Seu time é {jogador.time}</p>
        <p>Joga {jogador.jogo}</p>
        <p>Ele é {jogador.nivel}</p>

    </div>
  )
}

export default TemplateExpressions