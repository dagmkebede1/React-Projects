import React, { useState } from 'react'
import './App.css'
import products from './data'
import ProductList from './Component/ProductList'
import Logo from './Component/Logo'
import Footer from './Component/Footer'

const App = () => {
  const [Product, setProduct] = useState(products)
  const [readmore, setReadmore] = useState(false)
  const readmoreToggle = () => {
    readmore(true)
  }

  const searchHanddler = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    const prod = products.filter((item) => {
      return item.name.startsWith(e.target.value.toUpperCase())
    })
    setProduct(prod)
  }
  const selectHanddler = (e) => {
    e.preventDefault()
    if (e.target.value === 'all') {
      // console.log(e.target.value)
      return setProduct(products)
    }
    const prod = products.filter((item) => {
      return item.category === e.target.value
    })
    setProduct(prod)
  }
  const removeProduct = (id) => {
    const newProduct = products.filter((product) => {
      return product.id !== id
    })
    console.log(newProduct)
    setProduct(newProduct)
  }
  return (
    <div className='container'>
      <div className='top-section'>
        <Logo />
        <div className='search-container'>
          <input
            type='text'
            className='search'
            placeholder='Search Product'
            onChange={searchHanddler}
          ></input>
          <div className='filter'>
            <label>filter by Category</label>
            <select className='select' onChange={selectHanddler}>
              <option value='all'>all</option>
              <option value='Mobile'>Mobile</option>
              <option value='Tablet'>Tablet</option>
              <option value='Laptop'>Laptop</option>
            </select>
          </div>
        </div>

        <ProductList
          removeProduct={removeProduct}
          Product={Product}
          readToggle={readmoreToggle}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
