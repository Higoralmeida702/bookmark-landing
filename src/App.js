import './styles.css'
import Cabecalho from "./componentes/cabecalho";
import BookmarkManager from "./componentes/bookmarkManager"
import DownloadExtenoes from './componentes/downloadExtensoes';
import PerguntasFrequentes from './componentes/perguntasFrequentes';
import Rodape from './componentes/rodape';

function App() {
  return (
    <div>
      <Cabecalho/>
      <BookmarkManager/>
      <DownloadExtenoes/>
      <PerguntasFrequentes/>
      <Rodape/>
    </div>
  );
}

export default App;
