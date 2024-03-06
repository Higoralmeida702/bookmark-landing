import './downloadExtensoes.css'

const DownloadExtensoes = () => {
    return (
        <div>
            <div className="downloadExtensao">
                <div className="downloadExtensaoTexto">
                <h1>Download the extension</h1>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize</p>
                </div>
            </div>
            <seciton className="extensao">
            <div className="designExtensoes chrome">
                <img src="./imagens/logo-chrome.svg" alt="" />
                <h2>Add to Chrome</h2>
                <p>Minimum version 62</p>
                <button type="button">Add & Install Extension</button>
            </div>
            <div className="designExtensoes firefox">
                <img src="./imagens/logo-firefox.svg" alt="" />
                <h2>Add to Firefox</h2>
                <p>Minimum version 55</p>
                <button type="button">Add & Install Extension</button>
            </div>
            <div className="designExtensoes opera">
                <img src="./imagens/logo-opera.svg" alt="" />
                <h2>Add to Opera</h2>
                <p>Minimum version 46</p>
                <button type="button">Add & Install Extension</button>
            </div>
        </seciton>
        </div>
       
    )
}

export default DownloadExtensoes