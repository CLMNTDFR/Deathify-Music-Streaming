// App.js
import { useState, useEffect } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const showAlert = (name) => {
  }

  return (
    <div>
      <Banner />
      <div style={{ marginTop: '60px' }}> {}
        <div className='tbs-layout-inner'>
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} showAlert={showAlert} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
