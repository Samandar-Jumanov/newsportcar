import './mc.css'
import { useContext, useState  } from 'react'
import { SportContext } from '../Context/context'
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa'
import img1 from './images/img1.avif'
import img2 from './images/img2.avif'


const McLaren = () =>{
    const {setPage} = useContext(SportContext)
    const [img , setImg] = useState('img1')
   
    return(
         <div className="Mc" >
            <div className="box1">
           {img == 'img1' && <img className='img' src={img1}/>}
           {img == 'img2' && <img  className='img'src={img2}/>} 
         <li className='right'onClick={()=>setImg('img2')}> <FaAngleDoubleRight/> </li>
        <li className='left' onClick={()=>setImg('img1')} > <FaAngleDoubleLeft/> </li>

                </div>
           <div className="box2">
            <h1 className='describtionHeader'> Mersades  SPORT CAR</h1>
            <p className="description">
            Class	Sports car/Grand tourer (S)
            <br />
            <br />
            Body style	2-door 2+2 seater coupé
            </p>
              <p className="description">
              Layout	Front mid-engine, all-wheel drive
              <br />
              <br />
              Platform	Nissan Premium Midship
              <br />
              <br />
              Although it`s been updated yet again, the Nissan GT-R is basically still the same R35-generation coupe 
              that began hitting dealer lots 15 years ago and quickly earned the nickname “Godzilla.” 
              This year sees the return of the mid-tier T-Spec model, which slots between the Premium and
               full-blown Nismo versions. The twin-turbocharged 3.8-liter V-6 engine still makes 600 horsepower
                under the hood of Nismo units, while Premium and T-Spec models see a tamer yet still potent 565 ponies. 
                The usual performance bits are still present, too, including e-adjustable Bilstein dampers and Brembo 
                brakes with carbon-ceramic setups for the performance-focused variants. 

              </p>
         </div>
           <button className='orderBtn' onClick={()=>setPage('contact')}>Order now </button>
         </div>
    )
}
export default McLaren 