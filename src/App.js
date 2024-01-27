import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './components/formpage/Form';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
