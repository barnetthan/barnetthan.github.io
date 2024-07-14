import "../styles/CarouselImage.css";

export default function CarouselImage({ image, alt, caption }) {
  return (
    <div className="center_image">
      <figure>
        <img src={image} alt={alt} className="resize_image" />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}
