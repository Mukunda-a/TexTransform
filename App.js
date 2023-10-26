import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is  Enabled Or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(() => {
        setAlert(null);
    }, 2500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#373b40';
      showAlert("Dark Mode Has Been Enabled","success");
      //document.title = 'Textutils in Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
      //document.title = 'Textutils in Light Mode';
    }
    
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
        {/* /* /users--> Component1
          /users/home-->Component2*/}
          {/* <Route exact path="/about" element={<About mode={mode} />}></Route>  */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextBoard - Enter The Text To Perform Tasks" mode={mode}/>}></Route> */}
          <TextForm showAlert={showAlert} heading="TextBoard - Enter The Text To Perform Tasks" mode={mode}/>
        {/* </Routes> */}
      </div>
       {/* </Router> */}
    </>
    
  );
}

export default App;
