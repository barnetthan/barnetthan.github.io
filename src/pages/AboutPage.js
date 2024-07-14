import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import ImageCarousel from "../components/PictureCarousel"

function AboutPage() {
  return (
    <div>
      <NavBar curPage="about" />
      <div style={{width: "25vw"}}>
        <ImageCarousel/>
      </div>
      <div>About me page</div>
      <div>I like sports, poker, basketball, the chicago bears</div>
      add carousel of cool pictures of me ex poker, bball, gf
      
    </div>
  );
}

export default AboutPage;
