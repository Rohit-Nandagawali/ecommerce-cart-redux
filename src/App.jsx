import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <Provider store={store} >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
     
    </Provider>
  );
}

export default App;
