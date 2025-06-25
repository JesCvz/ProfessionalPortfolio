import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css"
import { Header } from './Components/Header/Header';
import { Home } from './View/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { ViewSource } from './Components/ViewSource/ViewSource';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Home" Component={Home}/>
        <Route path="*" element={<Navigate to='/Home' />}/>
      </Routes>
      <Footer/>
      <ViewSource/>
    </>
  )
}

export default App
