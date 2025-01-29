import './App.css';
import ItemListContainer from './components/ItemListCointeiner';
import NavBar from './components/NavBar';
/* import TitleComponent from './components/TitleComponent';
 */
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a mi e-Commerce"}/>
    </>
  );
}

export default App;
