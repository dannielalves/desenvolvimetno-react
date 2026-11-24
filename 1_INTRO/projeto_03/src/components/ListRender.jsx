import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Daniel", "Romário", "Rian", "Maria"])

    const [users, setUsers] = useState([
        {id: 1, name:"Daniel", age:40},
        {id: 2, name:"Romário", age:37},
        {id: 3, name:"Rian", age:34},
        {id: 4, name:"Myrla", age:30}
    ])

    const deleteRandom = () => {
        const randomIndex = Math.floor(Math.random() * users.length)

        setUsers((prevUsers) => {
            return prevUsers.filter((_, index) => index !== randomIndex)
        })
    }

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
           <div>
            <h1>Restam {users.length} usurários</h1>
            <button className="btnDelete" onClick={deleteRandom}>Delete Usuario Aleatório</button>
           </div>
        </>
    )

}

export default ListRender