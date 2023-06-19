
import './App.css';
import Main from './components/main'; 
import Start from './components/start';
import Choosed from './components/choosed';
import Rules from './components/Rules';
import {BrowserRouter, Routes,
  Route
}  from 'react-router-dom';
import {useState} from 'react'



function App() {
  const[im,setIm]=useState("")
  const [image,setImage]=useState("")
  const[score,setScore]=useState(0)
  console.log(score)
  return (
   <> 
    <BrowserRouter>
    <Main score={score}/>
    <Routes> 
      <Route exact path='/' element={<Start im={im} setIm={setIm} setImage={setImage} />}></Route>
      <Route exact path='/choosed' element={<Choosed im={im} image={image} setScore={setScore} score={score}/>}></Route>
    </Routes>  
    <Rules/>
    </BrowserRouter>  
    </>
  );
}

export default App;
