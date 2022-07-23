import './App.css';
import Title from './component/Title';
import Header from './component/Header';
import CreateFolder from './component/CreateFolder';
import CreateFile from './component/CreateFile';
import Folders from './component/Folders';
import Files from './component/Files';

function App() {
  let folders = ["work", "daniel", "tamar", "daniel", "tamar", "daniel", "tamar", "daniel", "tamar"]
  let files = ["text.txt","201422.pdf","fakedata.png","201422.pdf","fakedata.png","201422.pdf","fakedata.png","201422.pdf","fakedata.png"]
  return (
    <div className="App">
      <Header />
      <Title name="folder" />
      <div className='rowflex'>
      {folders.map(v => <Folders name={v} />)}
      </div>
      <CreateFolder />
      <Title name="files" />
      <div className='rowflex'>
      {files.map(v => <Files name={v} />)}
      </div>
      <CreateFile />
    </div>
  );
}

export default App;
