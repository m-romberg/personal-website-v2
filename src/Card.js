import "./Card.css";


/** Card: displays image.
 *
 * Props:
 * - capdescriptiontion: string describing the image
 * - src: string for the image link
 * - currNum: integer for what image we're on
 * - totalNum: integer for how many images are in the collection
 *
 * State:
 * - none
 *
 * App --> Carousel --> Card
 */

function Card({ title, url, description }) {

  return (
    <div className="Card">
      <a href={url}>
        <h4 className="Card-title">{title}</h4>
        <small className="Card-small">
          {description}
        </small>

      </a>
    </div>
  );
}

export default Card;
