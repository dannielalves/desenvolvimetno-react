import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Daniel", "Romário", "Rian", "Maria"])

    const [users] = useState([
        {id: 123, name:"Daniel", age:40},
        {id: 124, name:"Romário", age:37},
        {id: 125, name:"Rian", age:34},
        {id: 126, name:"Myrla", age:30}
    ])
    return (
        <>
           <h1>List Render - Pessoas 01</h1>
           <div>
            <ul>
                {list.map((pessoa, id) =>(
                    <li key={id}>{pessoa}</li>
                ))}
            </ul>
           </div>
           <h1>List Render - Pessoas 02</h1>
           <ul>
                <li className="tituloLista">Nome - Idade</li>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
           </ul>
        </>
    )

}

export default ListRender