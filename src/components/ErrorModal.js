import Cards from "./Card/Cards"

const ErrorModal = (props) => {
    const resetFunction = () => {
        props.resetForm()
    }
    return (<Cards>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div><p>{props.message}</p></div>
        <footer></footer>
        <button type = 'reset' onClick={resetFunction}>Okay</button>
    </Cards>)

}

export default ErrorModal