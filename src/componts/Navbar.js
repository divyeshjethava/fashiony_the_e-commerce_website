import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import LoginDialog from './LoginDialog';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import AddToCartDialog from './AddToCartDialog';
import { useCart } from '../componts/CartContext';
import { useAuth } from '../componts/AuthContext';


export default function Navbar() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true, });
  const [isCartDialogVisible, setIsCartDialogVisible] = useState(false);
    const { loggedIn, loginRedirect } = useAuth();
  const { getTotalItems } = useCart();
  const [openDialog, setOpenDialog] = useState(false);
  const location = useLocation();
  const OpenDialogHandler = () => setOpenDialog(true);
  const CloseDialogHandler = () => setOpenDialog(false);

  const OpenCart = () => {
    setIsCartDialogVisible(true);
  }

  const closeCartDialog = () => {
    setIsCartDialogVisible(false);
  }
  const handleAddToCartClick = () => {
    if (!loggedIn) {
        alert('Please log in to add items to the cart.');
        loginRedirect();  
    } else {
      OpenCart(); 
    }
};
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='nav'>
      <span className='lab'>Fashiony</span>

      <ul className='ul'>

        <li><NavLink to="/" className={({ isActive }) => (isActive || location.pathname === '/bestselling' ? 'title active' : 'title')} >HOME</NavLink></li>
        <li><NavLink to="/Shop" className={({ isActive }) => (isActive ? 'title active' : 'title')}>SHOP</NavLink></li>
        <li><NavLink to="/Feature" className={({ isActive }) => (isActive ? 'title active' : 'title')}>FEATURES</NavLink></li>
        <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? 'title active' : 'title')}>CONTACT</NavLink></li>
      </ul>
      <ul className='ul1'>
        <li>
          <div style={{ position: 'relative' }}>
            <i className='fa-solid fa-bag-shopping' onClick={handleAddToCartClick}></i>
            <span className='cart-count'>{getTotalItems()}</span>
          </div>
        </li>
        <li><div className='LoginBtn' onClick={OpenDialogHandler}><span>LOGIN</span></div></li>
      </ul>
      <LoginDialog isOpen={openDialog} onClose={CloseDialogHandler} />
      <AddToCartDialog isOpen={isCartDialogVisible} onClose={closeCartDialog} />

    </motion.div>


  )
}
