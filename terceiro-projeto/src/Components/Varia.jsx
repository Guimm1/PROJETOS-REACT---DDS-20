import {useState} from "react"

const Varia = () => {
    //Variavel padrão
    let itgo = "Shazam"
    let numero = 11
    let Heroi = "Batman"

    
    //Variável com hook useState
    const [number, setNumber] = useState(9)
    const [heroi, setHeroi] = useState("Batman")
 
    return (
    <div>
        {/* USO DE VARIAVEIS PADRÃO */}
        <p>A palavra sorteada foi:{itgo}</p>
        <h1>{numero}</h1>
        <button onClick={() =>{
            numero++
            console.log(numero)
        }}>
            Aumentar contagem
        </button>

        {/* USO DE VARIAVEIS A PARTIR DE AGORA */}
        <h1>{number}</h1>
        <button onClick={() =>{
            setNumber(number + 2)
        }}>
            Aumentar contagem
        </button>

        
        <button onClick={() =>{
            setNumber(9)
        }}>
            Resetar a contagem
        </button>

        <button onClick={() => {
            setNumber(number - 2)
        }}>
            Diminuir
        </button>

        <h1>{heroi}</h1>
        <button onClick={() =>{
            setHeroi("Bruce Wayne")
        }}>
            Revelar
        </button>
        
    </div>
  )
}

export default Varia