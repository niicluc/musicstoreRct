import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer'
/*import {BrowserRouter, Routes, Route} from "react-router-dom" ; */

/*Const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Components/>}> </Route>
    </Routes>
    </BrowserRouter>
  )
} */

function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;

