import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'
import { IntemDetailContainer } from './components/itemDetailContainer/IntemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  //creando enrutamiento
  return (

    <BrowserRouter>
    
    <NavBar/>

    <Routes>
    
        <Route path='/' element={  <ItemListContainer/>}/>

        <Route path='/category/:categoryName' element={  <ItemListContainer/>}/>

        <Route path='/itemDetail/:id' element={<IntemDetailContainer/>}/>

        <Route path='/cart' element={<h2>asd</h2>}/>

        <Route path='*' element={<h3>La ruta no existe</h3>}/>
        


    </Routes>

    </BrowserRouter>




  );
}

export default App;

/**    <div>
      
    
      
    </div> */