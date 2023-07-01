import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode= ()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(4 19 65)";
      showAlert("Darkmode has been enabled","success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled","success");
    }
  }
  return (
    <div> 
      <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path= "/about" element={<About/>}>
          </Route>
          <Route path= "/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}> 
          </Route>
        </Routes>
      </div>  
      </Router>
      
    </div>
    
  );
}

export default App;
