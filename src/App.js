import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer'
import ItemDetailContainer from "./views/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import CartProvider from './Context/CartContext'; 


function App() {
  return (
    <div>
        <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />}> </Route>
                <Route path="/category/:categoria" element={<ItemListContainer />} > </Route>
                <Route path="/item/:id" element={<ItemDetailContainer />} > </Route>
                <Route path="/item/total" element={<ItemDetailContainer />} > </Route>
                <Route path="/*" element={<div> Pagina erronea</div>}> </Route>
            </Routes>
        </BrowserRouter>
        </CartProvider>

    </div>
  );
}

export default App;

