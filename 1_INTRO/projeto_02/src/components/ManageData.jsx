import { useState } from "react";

const ManageData = () => {
    let someData = 10;

     const [number, setNumber] = useState(() => {
        const saved = localStorage.getItem("number");
        return saved !== null ? Number(saved) : 10;
    });

    const increment = () => {
        setNumber(prev => {
            const newValue = prev + 1;
            localStorage.setItem("number", newValue);
            return newValue;
        });
    };
    const decrement = () => {
        setNumber(prev => {
            const newValue = prev - 1;
            localStorage.setItem("number", newValue);
            return newValue;
        });
    };

    return (
        <>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => someData++}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={decrement}>Diminuir + </button>
            <button onClick={increment}>Aumentar + </button>
        </div>

        </>
    )
}

export default ManageData