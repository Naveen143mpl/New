import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Promotion from "../components/promotion";
import Rating from "../components/Rating";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Carousel/>
      <div id="ratingtext">
        <p>⭐ 4.7 out of 5 from 850+ happy users | Trusted for Pure, Skin-Friendly & Eco-Safe Beauty</p>
      </div>
      <div style={{ width: "100%", backgroundColor: "#ccf5cc", padding: "12px 0" }}>
      <marquee 
       style={{ color: "black", fontSize: "20px", fontWeight: "600" }}>
    ✨ Reimagine beauty with the power of nature. Safe, gentle, and crafted for a glow that lasts all day.
       </marquee>
    </div>
     <Cards/>
     <Promotion/>
     <Contact/>
    </div>
  

  );
}
