import {useState} from 'react'

const Listagem = () => {
  const [lista, setLista] = useState(["Pedro", "Cris", "Manoel", "Altair", "Moacyr"])

  const [jogadores] = useState([
    {id:1, nome:"Kaká", time:"Milan", number:8},
    {id:2, nome:"Bruno Henrique", time:"Wolfsburg", number:23},
    {id:3, nome:"Di Stefano", time:"Real Madrid", number:10},
  ]);

  const [numero,setNumero] =useState(1)
  
  //O jogador "BARABRARA" Jogou no time "Berere" com a camisa "TCHU"
    return (
    <div>
        <button onClick={() => {
            setNumero(numero + 1)
            console.log([...lista])
                        setLista([...lista,numero])
        }}>
            Adicionar na lista
        </button>
        <h2>Listagem</h2>
        <ul>
            <li>João Lucas</li>
            <li>Marcelo</li>
            {
                lista.map((valor,index) =>(
                    <li key={index}>{valor}</li>
                ))}
        </ul>

        <h2>Lista de Jogadores</h2>
        {jogadores.map((jogador) =>(
            <h3 key={jogador.id}>
                O jogador {jogador.nome} Jogou no time {jogador.time} com a camisa {jogador.number}
            </h3>
        ))}
    </div>
  )
}

export default Listagem