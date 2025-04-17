import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Details from './Details';


export default function BestSell() {
  const statusFilter = "bs"
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.1, });

  const productsToDisplay = products.slice(0, 3);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/product', {
          params: { statusFilter },
        });

        if (response.data && response.data.length > 0) {
       
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [statusFilter]);

  const handleNavigate = (product) => {
    navigate('/details', { state: { product } });
  };
  return (
    <div className='Best-container'>
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}

      >Best Selling</motion.h1>
      <motion.h3
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >Get in on the trend with our curated selection of best-selling style.</motion.h3>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}

        className="btproMin">

        {productsToDisplay.map((product) => {
          return (
            <div key={product._id} className="btproMin1"  onClick={() => handleNavigate(product)}>
              {
              <img className = "img_c_p"
                src={product.images?.[0]}
                alt={product.name}
                
              />
              }
             
              <h4>{product.name}</h4>
              <div className='childbtmin'>
                <span className='price'>Rs.{product.regularPrice}</span>
                <span>{product.rating || "N/A"} <i className="fas fa-star"></i></span>
              </div>
            </div>
          );
        
        })}
        
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='btnBestproDiv'>
        <button className='btnBestpro' onClick={() => navigate('/bestselling')}>
          <div className='green'></div>
          See all <i className="fa-solid fa-arrow-right"></i>
        </button>
      </motion.div>
   

    </div>
  )
}
