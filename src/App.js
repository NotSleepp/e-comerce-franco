import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'
import { IntemDetailContainer } from './components/itemDetailContainer/IntemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from './components/context/CartContext';
import { Cart } from './components/cart/Cart';

function App() {

  //creando enrutamiento
  return (

    <BrowserRouter>
    <CartContextProvider>
    <NavBar/>

    <Routes>
    
        <Route path='/' element={  <ItemListContainer/>}/>

        <Route path='/category/:categoryName' element={  <ItemListContainer/>}/>

        <Route path='/itemDetail/:id' element={<IntemDetailContainer/>}/>

        <Route path='/cart' element={<Cart/>}/>

        <Route path='*' element={<h3>La ruta no existe</h3>}/>
        


    </Routes>

    </CartContextProvider>
    
    </BrowserRouter>




  );
}

export default App;

/**    <div>
      
    
      
    </div> */