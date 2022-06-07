import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ Product, removeProduct, readToggle }) => {
  return (
    <div>
      {Product.length < 1 ? (
        <h4>Sorry! no Product with your search</h4>
      ) : (
        <div className='card-container'>
          {Product.map((item) => {
            const { id, name, category, price, image } = item
            return (
              <ProductItem
                key={id}
                id={id}
                name={name}
                category={category}
                price={price}
                image={image}
                removeProduct={removeProduct}
                readToggle={readToggle}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ProductList
