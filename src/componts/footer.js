import React from 'react'

export default function footer() {
  return (
    <div className='MainFoot_con'>
        <div className='Main_sub_f'>
        <div className='foot_sub'>
      <span className='lab1'>Fashiony</span>
      <span className='social_media'>Social Media</span>
      <div className='social_media_icon'>
          <i className='fab fa-facebook'></i>
          <i className='fab fa-instagram'></i>
          <i className='fab fa-twitter'></i>
          <i className='fab fa-whatsapp'></i>
      </div>
      </div>
      <div className='foot_sub1'>
        <h4>SHOP</h4>
        <span>Products</span>
        <span>Overview</span>
        <span>pricing</span>
        <span>Releases</span>

      </div>
      <div className='foot_sub1'>
      <h4>COMPANY</h4>
        <span>About Us</span>
        <span>Contact</span>
        <span>News</span>
        <span>Support</span>

      </div>
      <div className='foot_sub2'>
      <h4>STAY UP TO DATE</h4>
       <div className='foot_sub2_input'>
              <input type="text" placeholder='Enter your email' />
              <button>SUBMIT</button>
       </div>

      </div>
        </div>
      
    </div>
  )
}
