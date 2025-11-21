import React from "react";
import "../styles/cards.css";

export default function Cards() {
   const products = [
    { img: "./p1.png", name: "Organic Shampoo", rating: 4.8, price: "₹499" },
    { img: "./p2.png", name: "Aloe Skin Gel", rating: 4.7, price: "₹299" },
    { img: "./p3.png", name: "Herbal Face Wash", rating: 4.9, price: "₹399" },
    { img: "./p4.png", name: "Rose Water Mist", rating: 4.6, price: "₹199" },
    { img: "./p5.png", name: "Natural Hair Oil", rating: 4.8, price: "₹549" },
    { img: "./p6.png", name: "Saffron Glow Cream", rating: 4.9, price: "₹699" },
    { img: "./p7.png", name: "Charcoal Cleanser", rating: 4.5, price: "₹349" },
    { img: "./p8.png", name: "Turmeric Night Serum", rating: 4.9, price: "₹799" },
  ];
  return (
   <div className="cards-container">
      {products.map((item, index) => (
        <div className="card-box" key={index}>
          <img src={item.img} alt="" className="cardimg" />

          {/* Product Name */}
          <p className="p-name">{item.name}</p>

          {/* Rating */}
          <p className="p-rating">⭐ {item.rating}</p>

          {/* Price */}
          <p className="p-price">{item.price}</p>
        </div>
      ))}
    </div>

  );
}
