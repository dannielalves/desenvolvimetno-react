const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>CLique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou também!')}>Clique aqui também!</button>
            </div>
        </div>
    )

}

export default Events