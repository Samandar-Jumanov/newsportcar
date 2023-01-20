import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import {FaBars}  from 'react-icons/fa'
import { SportContext } from './Context/context';
import Gtr from './Gtr/Gtr'
import Supra from './Supra/Supra';
import Bmw from './Bmw/bmw';
import Mers from './Mers/mers';
import Lambo from './Lambo/Lambo';
import Ferrari from './Ferrari/ferrari';
import Mclaren from './Mclaren/mclaren';
import Price from './Contact/contact';
function App() {
const   [page , setPage ] = useState('gtr')
return (
<div className="App">
<SportContext.Provider value ={{page , setPage}}>
<button className='toggle'onClick={()=>setPage('navbar')}> <FaBars/></button>
{page == 'navbar' && <Navbar/>}
{page == 'gtr' && <Gtr/>}
{page == 'supra' && <Supra/>}
{page == 'bmw' && <Bmw/>}
{page == 'mers' && <Mers/>}
{page == 'lambo' && <Lambo/>}
{page == 'ferrari' && <Ferrari/>}
{page == 'mclaren' && <Mclaren/>}
{page == 'contact'&& <Price/>}
</SportContext.Provider>
    </div>
  );
}

export default App;
