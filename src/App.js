
import './App.css';
import Main from './components/main'; 
import Start from './components/start';
import Choosed from './components/choosed';
import {BrowserRouter, Routes,
  Route
}  from 'react-router-dom';
import {useState} from 'react'
function App() {
  const[im,setIm]=useState("")
  const [image,setImage]=useState("")
  console.log(im)
  console.log(image)
  return (
   <> 
    <BrowserRouter>
    <Main />
    <Routes> 
      <Route exact path='/' element={<Start im={im} setIm={setIm} setImage={setImage} />}></Route>
      <Route exact path='/choosed' element={<Choosed im={im} image={image}/>}></Route>
    </Routes>  
    </BrowserRouter>  
    </>
  );
}

export default App;
