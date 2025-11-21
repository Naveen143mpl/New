import React from "react";
import "../styles/promotion.css";

export default function Promotion() {
  return (
    // ✔ FIXED: id should be "carouselExampleIndicators"
    // This must match data-bs-target
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        {/* ✔ FIXED: data-bs-target now matches the ID above */}
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./pro.png" className="d-block w-100" alt="slide1" id="proimg" />
        </div>

        <div className="carousel-item">
          <img src="./curv2.png" className="d-block w-100" alt="slide2" id="proimg" />
        </div>

        <div className="carousel-item">
          <img src="./curv3.png" className="d-block w-100" alt="slide3" id="proimg" />
        </div>
      </div>

      {/* ✔ FIXED: also updated here */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
