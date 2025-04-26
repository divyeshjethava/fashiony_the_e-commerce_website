import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ic from '../images/hanger.svg'
import visa from '../images/visa.jpeg'
import mastercard from '../images/mastercard.jpg'
import paypal from '../images/pay pal.png'
import upi from '../images/upi.jpg'
import schart from '../images/size-chart.png'
import AddToCartDialog from './AddToCartDialog';
import { useCart } from './CartContext';
import { useAuth } from '../componts/AuthContext';

export default function Details() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const { loggedIn, loginRedirect } = useAuth();
  const [isCartDialogVisible, setIsCartDialogVisible] = useState(false);
  const { addItemToCart } = useCart();


  const toggleChart = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const product = location.state?.product;

  const discount = (reg, sal) => {
    let desPer = Math.round(((reg - sal) / reg) * 100);
    return desPer + "%";
  }
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  }
  const handleAddToCartClick = () => {
    if (!loggedIn) {
      alert('Please log in to add items to the cart.');
      loginRedirect();
    } else {
      handleAddToCart();
    }
  };
  const handleAddToCart = () => {
    if (selectedSize) {
      addItemToCart({
        ...product,
        size: selectedSize,
        quantity: 1,
      });
      setIsCartDialogVisible(true);

    } else {
      alert("Please select a size before adding to cart.");
    }
  }

  const closeCartDialog = () => {
    setIsCartDialogVisible(false);
  }
  if (!product) {
    return <div className='det_con'>Product not found</div>;
  }
  return (
    <div className='det_con'>

      <div className="s_det_con1">
        <span className='d_p_name'>{product.name}</span>
        <div className='d_I_btn_c'>
          <button>General Info</button>
          <button>Product Details</button>
        </div>
        <img src={product.images?.[0]} alt={product.name} />
        <div className='img_d_con'>

          {product.images && product.images.length > 0 ? (
            product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - ${index + 1}`}
                className="product-image"
              />
            ))
          ) : (
            <p>No images available</p>
          )}

        </div>

      </div>
      <div className="s_det_con2">
        <div className='p_d_c'>
          <div className='p_d_c1'>
            <span className='S_price'> &#8377;{product.salePrice}</span>
            <span className='R_price'>&#8377;{product.regularPrice}</span>
            <div className='dis_cont' >
              <span>{discount(product.salePrice, product.regularPrice)}</span>
            </div>

          </div>

          <div className='review_con'>
            <div class="review-container">
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
            </div>
            <span>0 Reviews</span>
          </div>
        </div>
        <div className='color_con'>
          <span>Color</span>
          <div className='color' style={{
            background: product.color,
            outline: `2px solid ${product.color}`,
          }}></div>
        </div>
        <div className='size_con'>
          <span>Size</span>
          <div>
            <select className="size" name="size" id="size" onChange={handleSizeChange}>
              <option value="" disabled selected>Please Select</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <div className='schart' onClick={toggleChart}>
              <img src={ic} alt='Error to Load images' />
              <span>Size Chart</span>

            </div>
            {isVisible && (
              <div className='modal' onClick={toggleChart}>
                <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                  <img src={schart} alt="Size Chart" />
                </div>
              </div>
            )}
          </div>
          <div className='carts_cont'>
            <input type="number" value="1" min="1" />
            <button className='addTocart' onClick={handleAddToCartClick}><i className="fa-solid fa-cart-shopping" ></i>ADD TO CART</button>
            <button className='favorites'><i className="fa-solid fa-heart"></i>    FAVOURITE</button>


          </div>
          <div className='diliver_con'>
            <span>Delivery</span>
            <p>Free standard shiping on orders over Rs.35 before tax, plus free returns</p>
            <table>
              <thead>
                <tr className='tr'>
                  <th>TYPE</th>
                  <th>HOW LONG</th>
                  <th>HOW MUCH</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Standard Delivery</td>
                  <td>1 - 4 Business Days</td>
                  <td>Rs.10</td>
                </tr>
                <tr>
                  <td>Express Delivery</td>
                  <td>1 Business Day</td>
                  <td>Rs.20</td>
                </tr>
                <tr>
                  <td>Pick Up in  Store</td>
                  <td>1 - 3 Business Days</td>
                  <td>Free</td>
                </tr>
              </tbody>

            </table>

          </div>
          <div className='return_con'>
            <span>Return</span>
            <p>You have 7 days to return the item(s) using any of the following method :</p>
            <li>Free store return</li>
            <li>Free returns via Post Service</li>
          </div>
        </div>
        <div className='share_con'>
          <span>Share : </span>
          <i className='fab fa-facebook'></i>
          <i className='fab fa-instagram'></i>
          <i className='fab fa-twitter'></i>
          <i className='fab fa-whatsapp'></i>
        </div>
        <div className='pay_o_con'>

          <img src={visa} alt='' />
          <img src={mastercard} alt='' />
          <img src={paypal} alt=''/>
          <img src={upi} alt='' />

        </div>
      </div>
      <AddToCartDialog isOpen={isCartDialogVisible} onClose={closeCartDialog} />
    </div>
  )
}
