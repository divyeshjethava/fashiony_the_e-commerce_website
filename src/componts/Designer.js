import React from 'react'
import accessories from '../images/accesories.webp'
import dresses from '../images/dresses.webp'
import outwear from '../images/outwear.jpg'

export default function Designer() {
  return (
    <div className='Des_conMain'>
        <h1 className='dh1'>Designer Clothes For You</h1>
        <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
        <div className='Des_conMain1'>
        <div className='des_con'>
          <img src={accessories} alt=''/>
          <h4>Accessories</h4>
          <p>Complete your ensemble with designer accessories such as handbags,scarves,belts and hats.</p>
       </div>
       <div className='des_con'>
       <img src={dresses} alt=''/>
       <h4>Dresses</h4>
       <p>Explore a stunning range of designer dresses, including evening gowns, chic day dresses, and more.</p>
       </div>
       <div className='des_con'>
       <img src={outwear} alt=''/>
       <h4>Outwear</h4>
       <p>Browse luxurious designer coats, jackets and blazers to stay stylishly warm during colder seasons.</p>
       </div>
        </div>
     
    </div>
  )
}
