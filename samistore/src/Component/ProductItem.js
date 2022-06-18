import React, { useState } from "react";

const ProductItem = ({ id, image, name, category, price, removeProduct }) => {
  const par =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.";
  const [readmore, setReadmore] = useState(true);
  const [desc, setDesc] = useState(`${par.substring(0, 30)} ...`);

  const readToggle = () => {
    if (readmore) {
      setDesc(par);
      setReadmore(false);
    } else {
      setDesc((prev) => {
        return `${par.substring(0, 30)} ...`;
      });
      setReadmore(true);
    }
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="card-price">
        <p>Category: {category}</p>
        <p className="price">$ {price}</p>
      </div>
      <p className="desc">{desc}</p>
      <div className="flex">
        <button className="btn-readmore" onClick={readToggle}>
          {readmore ? "Read More" : "Read less"}
        </button>
        <button onClick={() => removeProduct(id)} className="btn">
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
