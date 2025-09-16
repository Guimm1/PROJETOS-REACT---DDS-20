import React from 'react'


const Event = () => {

    const teste = (e) => {
        console.log("Funcionou sim senhor")

        //e = Propriedades do event
        console.log(e)
        
}

    
  return (
    <div>
         {/* função interna */}
        <button onClick={() => {console.log("Cliquei")}}> 
            Clique aqui
        </button>


        
        {/* Função externa ao elemento */}
        <button onClick={teste}> 
            Aqui também
            </button>
    </div>
  )
}

export default Event