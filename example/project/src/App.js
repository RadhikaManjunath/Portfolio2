import './App.css';
import Homepage from './components/Home/Homepage.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About1 from "./components/About/About1";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Resume1 from './components/Resume/Resume1';
import Contactus from './components/Contact/Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/project" index element={<Homepage></Homepage>} />
          <Route path="/About1" element={<About1></About1>}/>
          <Route path="/Resume1" element={<Resume1></Resume1>}/>
          <Route path="/Contactus" element={<Contactus></Contactus>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;