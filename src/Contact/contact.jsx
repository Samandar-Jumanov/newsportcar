import './contact.css'
const Price = () =>{

  const subBtn = () =>{
       alert('New purchase')
    }
    return(
    <div className="price">
        {/* <h1 className='priceHeader'>Welcome</h1> */}
        <input type="text" className='priceInput' placeholder='car name'/>
        <br />
        <input type='text' className='priceInput' placeholder='phone number'/>
         <br />
        <input type='email' className='priceInput' placeholder='email'/>
          <br />
        <input type='location' className='priceInput' placeholder='location'/>
        <br />
        <br />
       <button className="priceSub" onClick={subBtn}>Submit</button>
    </div>
    )
}
export default Price