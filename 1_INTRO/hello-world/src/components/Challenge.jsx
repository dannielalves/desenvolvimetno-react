const Challenge = ()=> {
    const n1 = 10;
    const n2 = 14;
    let soma = 0;
    const somar = (n1,n2) => {
        soma =  n1 + n2
    }

    return (
        <div>
            <h3>Valor1 = {n1}</h3>
            <h3>Valor2 = {n2}</h3>
            <button onClick={()=> console.log(n1+n2)}>Somar</button>
            <br />
            
        </div>
    )

}

export default Challenge