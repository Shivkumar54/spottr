import React, {useState} from 'react'
import "./cards.css"

import data from '../../data';


const Cards = () => {


  const [items, setItems] = useState(data)



  

  
            {/* Mapping */}

  const CardList = items.map((eachItems) => {
    const { title, subTitle, img, provide, distance, rating, isAvailable } = eachItems;

    let floater
  if (isAvailable === true) {
    floater = "Available"
  }
  else if (isAvailable === false) {
    floater = "Few Left"
  }
  else {
    floater= "Newly Opened"
  }


              return(
                <div className='item1 col-12 col-md-6 col-lg-3 my-3' >
                <div > 
                  {/* for Image  */}
                    <div className='RootImage' >
                    <div className='floater'>{ floater}</div>
                    <img src ={img} alt="Menu Pic" className='img-fluid' />
                  </div>
                  {/* for Image  */}
                  {/* for Menu Description  */}
                  <div >
                      <div className='texter main-title pt-4 pb-3'>
                        <div className="d-flex justify-content-between">
                          <h1 className='fs-4' >{title}</h1>
                          <h4 className='fs-6' > {rating}  <i class="fa-solid fa-star"></i></h4>
                        </div>
                        <h6 className='fs-6'>{subTitle }</h6>
                      <p>{provide}</p>
                      <p>{distance}</p>
                    </div>
                    <div className='buttons d-flex '>
                      <button className='enq'>Enquiry</button>
                      <button className='default-btn'>Book Now</button>
                    </div>
                  </div>
                  {/* for Menu Description  */}
                </div>
              </div>
              )
            })

            {/* Mapping */}





  

  return (

    <div className='menu-items container mt-5'>
      <div className='row'>
        <div className='col-12 mx-auto'>
          <div className='row my-4'>

            

            {CardList}

            
          </div>
        </div>
      </div>
      
   </div>

  )
}

export default Cards