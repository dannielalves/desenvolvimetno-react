const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }

    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando isso!!!</h1>
        } else {
            return <h1>Também posso renderizar essa parte!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>CLique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou também!')}>Clique aqui também!</button>
            </div>
            {renderSomething(true)}
        </div>
    )

}

export default Events