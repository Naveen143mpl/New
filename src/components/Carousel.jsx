import { useState } from "react";
import "../styles/carousel.css";

export default function Carousel() {
  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <button onClick={prev}>Prev</button>
      <img src={images[index]} className="c-img" />
      <button onClick={next}>Next</button>
    </div>
  );
}
