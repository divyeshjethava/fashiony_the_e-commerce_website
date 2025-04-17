import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BestSelling() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/product');
           
          
            const allProducts = response.data || [];
            const bestSellingProducts = allProducts.filter(product => product.status === 'bs');
                
            setProducts(bestSellingProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchProducts();
      }, []);

    return (
        <div className="our_container1">
            <h1>Best Selling Products</h1>
            <div className="product_b_con">

                {products.map((product) => {
                  
                    return(
                        
                    <div key={product._id} className="oc2">
                        
                        <img className="bimg" src={product.images?.[0]} alt={product.name} />
                      
                        <h4>{product.name}</h4>
                        <div className="product-details">
                            <span className="price">Rs.{product.regularPrice}</span>
                            <span>{product.rating ||  "  N/A"} <i className="fas fa-star"></i></span>
                        </div>
                    </div>
                    );
                })}

            </div>
        </div>
    );
}
