// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart';
import ContextAppProvider from './context/ContextApp';



function App() {
  return (
    <BrowserRouter>
      <ContextAppProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Mensaje pasado mediante props" />} />
            <Route path='/category/:categ' element={<ItemListContainer greeting="Mensaje pasado mediante props" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </ContextAppProvider >
    </BrowserRouter>
  );
}

export default App;
