// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Mensaje pasado mediante props" />} />
          <Route path='/category/:categ' element={<ItemListContainer greeting="Mensaje pasado mediante props" />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/*' element={<Navigate to="/" replace />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
