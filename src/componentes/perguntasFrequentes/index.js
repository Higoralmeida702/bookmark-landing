import React, { useState } from 'react';
import './perguntasFrequentes.css';

const PerguntasFrequentes = () => {
    const [perguntaAberta, setPerguntaAberta] = useState(null);

    const handleClick = (pergunta) => {
        if (perguntaAberta === pergunta) {
            setPerguntaAberta(null);
        } else {
            setPerguntaAberta(pergunta);
        }
    };

    return (
        <div className="perguntasFrequentes">
            <div className="perguntasFrequentesDetalhes">
                <h1>Frequently Asked Questions</h1>
                <p>Here are some of our FAQs. if you have any other questions you'd like answered please feel free to email us.</p>
            </div>
            <section className="areaDePerguntas">
                <div className="perguntas">
                    <div>
                        <div className='linha'/>
                        <h3 onClick={() => handleClick("bookmark")}>What is Bookmark?</h3>
                    {perguntaAberta === "bookmark" && <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.<br/> Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>}
                    </div>
                        <div className='linha'/>
                        <h3 onClick={() => handleClick("newBrowser")}>How can i request a new browser?</h3>
                    {perguntaAberta === "newBrowser" && <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.<br/> Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>}
                     <div>
                     <div className='linha'/>
                        <h3 onClick={() => handleClick("mobileApp")}>Is there a mobile app?</h3>
                    {perguntaAberta === "mobileApp" && <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.<br/> Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>}
                     </div>
                    <div>
                    <div className='linha'/>
                        <h3 onClick={() => handleClick("chromiumBrowsers")} >What About other Chromium browsers?</h3>
                    {perguntaAberta === "chromiumBrowsers" && <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.<br/> Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>}
                    </div> 
                    <div className='linha'/>
                </div>
                <div className='botaoPosicionamento'>
                    <button type="button">More Info</button>                            

                </div>
            </section>
        </div>
    );
}

export default PerguntasFrequentes;
