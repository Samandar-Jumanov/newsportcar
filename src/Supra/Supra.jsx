import './supra.css'
import { useContext, useState  } from 'react'
import { SportContext } from '../Context/context'
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpg'

const Supra = () =>{
    const {setPage} = useContext(SportContext)
    const [img , setImg] = useState('img1')
    return(
         <div className="Supra" >
            <div className="box1">
           {img == 'img1' && <img className='img' src={img1}/>}
           {img == 'img2' && <img  className='img'src={img2}/>}
        <li className='right'onClick={()=>setImg('img2')}> <FaAngleDoubleRight/> </li>
        <li className='left' onClick={()=>setImg('img1')} > <FaAngleDoubleLeft/> </li>

                </div>
           <div className="box2">
            <h1 className='describtionHeader'>Supra SPORT CAR</h1>
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
              The initial four generations of the Supra were produced from 1978 to 2002. The fifth generation
               has been produced since March 2019 and went on sale in May 2019.[4] The styling of the original
                Supra was derived from the Toyota Celica, but it was both longer and wider.[5] Starting in 
                mid-1986, the A70 Supra became a separate model from the Celica. In turn, Toyota also stopped 
                using the prefix Celica and named the car Supra.[6]
              </p>
           </div>
           <button className='orderBtn' onClick={()=>setPage('contact')}>Order now </button>
         </div>
    )
}
export default Supra 