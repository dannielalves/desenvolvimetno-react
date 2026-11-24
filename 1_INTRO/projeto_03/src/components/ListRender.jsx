import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Daniel", "Romário", "Rian", "Maria"])

    return (
        <>
           <h1>List Render</h1>
           <div>
            <ul>
                {list.map((pessoa) =>(
                    <li>{pessoa}</li>
                ))}
            </ul>
           </div>
        </>
    )

}

export default ListRender