import "../styles/products.css";

export default function Products() {
  const products = [
    { id: 1, img: "/car3.jpg", name: "Product 1", price: 199},
    { id: 2, img: "/car4.jpg", name: "Product 2", price: 299 },
    { id: 3, img: "/car5.jpg", name: "Product 3", price: 399 },
    { id: 4, img: "/mt.jpg", name: "Product 4", price: 499 },
    { id: 5, img: "/ninja.jpg", name: "Product 5", price: 599 },
    { id: 6, img: "/ola.jpg", name: "Product 6", price: 699 },
    { id: 7, img: "/r15.jpg", name: "Product 7", price: 799 },
    { id: 8, img: "/scooty.jpg", name: "Product 8", price: 899 },
  ];
  return (
    <div className="products-container">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <img src={p.img}/>
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}
