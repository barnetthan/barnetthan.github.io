import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarouselImage.css";

import basketball from "../images/basketball.png";
import family from "../images/family.png";
import gf from "../images/gf.png";
import poker from "../images/poker.png";
import winstar from "../images/winstar.png";
import metmuseum from "../images/metmuseum.png";
import CarouselImage from "./CarouselImage";

export default function Picture() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite={true} partialVisible={false}>
        <CarouselImage
          image={metmuseum}
          alt={"Met Museum Pic"}
          caption={"Outside the Met Museum in NYC"}
        />
        <CarouselImage
          image={family}
          alt={"Family Pic"}
          caption={"With my family at Acadia National Park"}
        />
        <CarouselImage
          image={gf}
          alt={"GF Pic"}
          caption={"With my girlfriend after kayaking adventure"}
        />
        <CarouselImage
          image={poker}
          alt={"Poker Pic"}
          caption={"First time playing poker in a casino (made $200!)"}
        />
        <CarouselImage
          image={winstar}
          alt={"Winstar Pic"}
          caption={"Winstar Casino trip with my friends"}
        />
        <CarouselImage
          image={basketball}
          alt={"Basketball Pic"}
          caption={"UT Intramural Basketball"}
        />
    </Carousel>
  );
}
