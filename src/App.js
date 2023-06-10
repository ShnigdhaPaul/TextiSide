import React, {useState} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';


function App() {
  const [mode, setMode]= useState('dark ');
  
  const toggleMode=()=>
  {
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("Light Mode Enable", "Success");
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showalert("DArk Mode Enable", "Success");


  }
}

const [alert, setalert]= useState(null);

const showalert=(message , type)=>
{
  setalert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500 );
}

  return(
 <>



     <Navbar title= "TextiSide" about="AboutTextiSide" mode={mode} toggleMode={toggleMode} /> 
     <div className='container'>  
     <Alert alert={alert}/>

  <TextForm showalert={showalert} heading="Enter your Text to analyze" mode={mode} toggleMode={toggleMode} />

   </div>  
   </>
  
  );
}




export default App;
