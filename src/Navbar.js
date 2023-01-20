import React, { useContext } from "react"
import {FaMixer} from 'react-icons/fa'
import './App.css'
import { SportContext } from "./Context/context"
const Navbar = () =>{
    const {setPage } = useContext(SportContext)
    return(
        <div>
           <li className="back"> <FaMixer/> </li> 
          <ul id='sportcars'>
          <li className='sportcar gtr' onClick={()=>setPage('gtr')}>GTR</li>
          <li className='sportcar supra' onClick={()=>setPage('supra')}>SUPRA</li>
          <li className='sportcar bmw' onClick={()=>setPage('bmw')}>BMW</li>
          <li className='sportcar mers' onClick={()=>setPage('mers')}>MERCADES</li>
          <li className='sportcar lambo' onClick={()=>setPage('lambo')}>LAMBO</li>
          <li className='sportcar ferarri' onClick={()=>setPage('ferrari')}>FERRARI</li>
          <li className='sportcar mclaren' onClick={()=>setPage('mclaren')}>MCLAREN</li>
         </ul>
        </div>
    )
    }
    export default Navbar