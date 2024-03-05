import './cabecalho.css'
const Cabecalho = () => {
    return (
        <header className='header'>
            <img src="./imagens/logo-bookmark.svg" alt="" />
        <div>
            <a href="#">FEATURES</a>
            <a href="#">PRICING</a>
            <a href="#">CONTACT</a>
            <button type="button" className='botaoLogin'>LOGIN</button>
        </div>
        </header>
    )
}

export default Cabecalho