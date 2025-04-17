import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Accesories() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/product');
           
          
          const allProducts = response.data || [];
        
          const bestSellingProducts = allProducts.filter(
            product => product.category?.trim() === 'Accessories'
          );
          
        
                
            setProducts(bestSellingProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchProducts();
      }, []);
      const handleNavigate = (product) => {
        navigate('/details', { state: { product } });
      };
  return (
    <div className="our_container">
   
  
      <div className='o_s_pro'>
      {products.map((product) => {
          
          return(
              
          <div key={product._id} className="oc1"  onClick={() => handleNavigate(product)}>
              
              <img className="bimg" src={product.images?.[0]} alt={product.name} />
              <div className='cart_s_c3'>
              <i className="fas fa-shopping-cart"></i>
              </div>
              <h4>{product.name}</h4>
              <div className="product-details">
                  <span className="price">Rs.{product.regularPrice}</span>
                  <span>{product.rating ||" N/A "} <i className="fas fa-star"></i></span>
              </div>
          </div>
          );
      })}
      </div>
   

    </div>

   


  )
}
