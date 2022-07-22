import logo from "./logo.svg";
import { ReactFileChunk, Button } from "react-file-chunk";
import "./App.css";
import "react-file-chunk/dist/css/index.css";

function App() {
  return (
    <div className="App">
      <ReactFileChunk>
        <Button>上传文件</Button>
      </ReactFileChunk>

      {/* <Button>上传文件</Button> */}
    </div>
  );
}

export default App;
