
import { Home } from './components/Home'
import { Records} from './components/Records'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  
  return (
    <>
  
     <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>}/>          
        <Route path="/Records" element={<Records />} />
        
      </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
//<img src={viteLogo} className="logo" alt="Vite logo" />