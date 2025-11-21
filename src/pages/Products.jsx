import "../styles/products.css";

export default function Products() {
  const products = [
    { id: 1, img: "/p1.png", name: "Product 1", price: 199},
    { id: 2, img: "/p2.png", name: "Product 2", price: 299 },
    { id: 3, img: "/p3.png", name: "Product 3", price: 399 },
    { id: 4, img: "/p4.png", name: "Product 4", price: 499 },
    { id: 5, img: "/p5.png", name: "Product 5", price: 599 },
    { id: 6, img: "/p6.png", name: "Product 6", price: 699 },
    { id: 7, img: "/p7.png", name: "Product 7", price: 799 },
    { id: 8, img: "/p8.png", name: "Product 8", price: 899 },
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
