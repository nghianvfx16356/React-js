import Appbar from './component/Appbar/Appbar.js';
import Boardbar from './component/Boardbar/Boardbar.js';
import './App.css';
import Boardcontent from './component/Boardcontent/Boardcontent.js';



function App() {
  return (
    <div className="trello-master">
      <Appbar />
      <Boardbar />
      <Boardcontent />
    </div>
  );
}

export default App;
