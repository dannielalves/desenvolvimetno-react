import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Romário")

    return (
        <>
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
        </div>
        <div>
            <h1>If Ternário</h1>
            {name === "João" ? (
                <div>O nome é {name}</div>
            ) : (<div>Nome NÃO encontrado</div>)}
        </div>
        <div>
            <button onClick={()=> setName('João')}>Clique aqui!</button>
        </div>
        </>
    )

}

export default ConditionalRender