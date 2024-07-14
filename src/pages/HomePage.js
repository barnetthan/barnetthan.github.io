import NavBar from "../components/NavBar";
import Portrait from "../images/MePicture.jpeg";
import HomeInfo from "../components/HomeInfo";

import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <NavBar curPage="home" />
      <div className="home">
        <div className="main-container">
          <HomeInfo/>
          <img
            className="portrait"
            src={Portrait}
            alt="Picture of me at Acadia National Park in Maine!"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
