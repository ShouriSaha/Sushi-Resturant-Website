import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import Addsushi from './screens/Addsushi';
import Orderslist from './screens/Orderslist';
import Sushilist from './screens/Sushilist';
import Userslist from './screens/Userslist';
import Editsushi from './screens/Editsushi';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cartscreen />} />
          <Route exact path='/register' element={<Registerscreen />} />
          <Route exact path='/login' element={<Loginscreen />} />
          <Route exact path='/orders' element={<Ordersscreen />} />
          <Route path='/admin' element={<Adminscreen />} />
          <Route exact path='/admin/userlist' element={<Userslist />} />
          <Route exact path='/admin/sushilist' element={<Sushilist />} />
          <Route exact path='/admin/addsushi' element={<Addsushi />} />
          <Route exact path='/admin/oderslist' element={<Orderslist />} />
          <Route exact path='/admin/editsushi/:sushiid' element={<Editsushi />} />


        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
