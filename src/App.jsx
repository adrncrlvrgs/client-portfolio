
import Layout from './sections/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/HomePage';
import Works from './page/Works';
import './App.css'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
