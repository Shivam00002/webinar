import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './components/formpage/Form';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />


          <Route path='/form' element={<Form />} />
        </Routes>
        <Toaster toastOptions={{ position: 'top-center', style: { fontSize: "20px" } }} />
      </BrowserRouter>
    </>
  );
}

export default App;
