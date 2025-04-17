import React, { useState, useEffect } from 'react';
import { useCart } from '../componts/CartContext';

const AddToCartDialog = ({ isOpen, onClose }) => {
    const { cart, removeItemFromCart } = useCart();
    const [shippingAmount, setShippingAmount] = useState(10);


    const [quantities, setQuantities] = useState(() =>
        cart.reduce((acc, item) => {
            acc[item._id] = 1; // Default quantity is 1
            return acc;
        }, {})
    );

    useEffect(() => {
        const initialQuantities = {};
        cart.forEach((item) => {
            if (!initialQuantities[item._id]) {
                initialQuantities[item._id] = 1; // Set default quantity
            }
        });
        setQuantities(initialQuantities);
    }, [cart]);

    if (!isOpen) return null;


    const increment = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };


    const decrement = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const itemTotal = item.salePrice * quantities[item._id];
            return total + itemTotal;
        }, 0);
    };

    const calculateTotalAmt = () => {
        return calculateTotal() + shippingAmount; 
    };

    return (
        <div className="cart-dialog">
            <div className="cart-dialog-content">
                <div className="cart_part_1">
                    <div className="head">
                        <h1>Shopping Cart</h1>
                        <h1>{cart.length} items</h1>
                    </div>
                    <div className="card_title">
                        <span className="pd">PRODUCT DETAILS</span>
                        <span>QUANTITY</span>
                        <span>PRICE</span>
                        <span>TOTAL</span>
                    </div>
                    <div className="card_body">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div className="cart_items">
                                {cart.map((item) => (
                                    <div key={item._id} className="cart-item">
                                        <img src={item.images?.[0]} alt={item.name} width="100" />
                                        <div className="item_details">
                                            <div className="item_n">
                                                <span className="i_name">{item.name}</span>
                                                <span>{item.size}</span>
                                                <span
                                                    className="item_remove"
                                                    onClick={() => {
                                                        console.log('Removing item with _id:', item._id);
                                                        removeItemFromCart(item._id);
                                                    }}
                                                >
                                                    Remove
                                                </span>
                                            </div>
                                            <div className="quntity_c">
                                                <i
                                                    className="fa fa-plus"
                                                    onClick={() => increment(item._id)}
                                                ></i>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={quantities[item._id]}
                                                    readOnly
                                                />
                                                <i
                                                    className="fa fa-minus"
                                                    onClick={() => decrement(item._id)}
                                                ></i>
                                            </div>
                                            <span className="price_cart">₹{item.salePrice}</span>
                                            <span className="total_cart">
                                                ₹{item.salePrice * quantities[item._id]}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <span className='continue_s' onClick={onClose}><i className="fas fa-long-arrow-alt-left long-left-arrow"></i>
                        Continue Shopping
                    </span>
                </div>
                <div className="cart_part_2">
                    <div className="head">
                        <h1>Order Summary</h1>
                    </div>
                    <div className="card_title" style={{ fontWeight: '500' }}>
                        <span >ITEMS  {cart.length} </span>

                        <span>₹{calculateTotal()}</span>
                    </div>
                    <div className='shiping_con'>
                        <span>SHIPPING</span>
                        <select className="ship" name="ship" id="ship" onChange={(e) => setShippingAmount(Number(e.target.value))}>
                          
                            <option value="10">Standard Delivery - ₹10</option>
                            <option value="20">Express Delivery - ₹20</option>
                            <option value="0">Pick Up in Store - Free</option>
                            
                        </select>
                    </div>
                    <div className='coupon_con'>
                        <span>PROMO CODE</span>
                        <input type="text"  className='promo' placeholder='Enter Yoour Code'/ >
                        <button className='Apply'>APPLY</button>
                    </div>
                    <div className='total_cons'>
                         <span>TOTAL AMOUNT</span>
                         <span>₹{calculateTotalAmt()}</span>
                    </div>
                    <button className='checkout'>CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default AddToCartDialog;
