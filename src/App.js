// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Mensaje pasado mediante props" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
