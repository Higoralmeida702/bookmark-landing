import './styles.css'
import Cabecalho from "./componentes/cabecalho";
import BookmarkManager from "./componentes/bookmarkManager"
import DownloadExtenoes from './componentes/downloadExtensoes';
import PerguntasFrequentes from './componentes/perguntasFrequentes';

function App() {
  return (
    <div>
      <Cabecalho/>
      <BookmarkManager/>
      <DownloadExtenoes/>
      <PerguntasFrequentes/>
    </div>
  );
}

export default App;
