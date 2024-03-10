import './rodape.css'
import { useState } from 'react'

const Rodape = () => {
    const [input, setInput] = useState ('')
    const handleInput = (evento) => {
        const valorInput = evento.target.value
        setInput (valorInput)
    }
   
    return (
        <div>
            <footer className="rodape"> 
            <div className=''>
            <h4>35.000+ ALREADY JOINED</h4>
            <h1>Stay up-to-date with what<br/> we're doing</h1>
         <form action="">
             <input type="email" placeholder="Enter your email address"
             value={input}
             onChange={handleInput}
             required/>
             <button type="submit">Contact us</button>
          </form> 
          </div> 
    <div className='rodapeFinal'> 
      <div className='rodapeFinalAlinhamento'>
         <img src="./imagens/logo-bookmark.svg" alt="" />      
          <a href="#">FEATURES</a>
            <a href="#">PRICING</a>
            <a href="#">CONTACT</a> 
            <div className='iconsRedeSocial'>
              <a><img src="./imagens/icon-facebook.svg" alt="" /></a>
                <img src="./imagens/icon-twitter.svg" alt="" />
            </div>
          </div>
     </div>
        </footer>             
     </div>
    )
}

export default Rodape