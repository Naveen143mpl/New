import { useState } from "react";
import "../styles/rating.css";

export default function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating-section">
      <h2>Rate Our Service</h2>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            onClick={() => setRating(n)}
            style={{ color: rating >= n ? "gold" : "gray" }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
