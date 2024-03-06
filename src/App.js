import './styles.css'
import Cabecalho from "./componentes/cabecalho";
import BookmarkManager from "./componentes/bookmarkManager"
import DownloadExtenoes from './componentes/downloadExtensoes';

function App() {
  return (
    <div>
      <Cabecalho/>
      <BookmarkManager/>
      <DownloadExtenoes/>
    </div>
  );
}

export default App;
