// Cart.js
import '../styles/Cart.css';
import { useState, useEffect } from 'react';
import bigcart from '../assets/bigcart.svg';
import clearIcon from '../assets/Clear.svg';
import deleteIcon from '../assets/delete.svg';
import buyIcon from '../assets/buy.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Toastify.css';
import { recordList } from '../datas/recordList';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0);

    useEffect(() => {
        document.title = `Deathify • Big Death Amego`;
    }, [total]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.tbs-cart')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const removeItem = (name) => {
        const updatedCart = cart.filter((item) => item.name !== name);
        updateCart(updatedCart);
    };

    const handleBuy = () => {
        cart.forEach((item) => {
            const album = recordList.find((record) => record.name === item.name);
            if (album && album.tracks) {
                album.tracks.forEach((track) => {
                    const link = document.createElement('a');
                    link.href = process.env.PUBLIC_URL + track.audio;
                    link.download = track.name;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }
        });
    };

    return (
        <div className={`tbs-cart ${isOpen ? 'tbs-cart-open' : 'tbs-cart-closed'}`}>
            <button
                className='tbs-cart-toggle-button'
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={bigcart} alt='Big Cart' className='tbs-cart-image' />
            </button>
            {isOpen && (
                <div className='tbs-cart-content'>
                    <ul className='tbs-cart-list'>
                        {cart.map((item, index) => (
                            <li key={`${item.name}-${index}`} className='tbs-cart-item'>
                                <button className='tbs-delete-button' onClick={() => removeItem(item.name)}>
                                    <img src={deleteIcon} alt="Delete icon" className='tbs-delete-icon' />
                                </button>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                    <button className='tbs-clear-button' onClick={() => updateCart([])}>
                        <img src={clearIcon} alt="Clear icon" className='tbs-clear-icon' />
                        Clear the cart
                    </button>
                    <button className='tbs-buy-button' onClick={handleBuy}>
                        <img src={buyIcon} alt="Buy icon" className='tbs-buy-icon' />
                        Free Download
                    </button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default Cart;
