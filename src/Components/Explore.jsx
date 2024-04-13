import Button from "./Common/Button";
import "../Components/Explore.css"
export default function Explore() {
  return (
    <div className="explore section">
      <div className="container explore-text flow-content">
        <h2>
          Discover one-of-a-kind accomodations for an unforgettable experience
        </h2>
        <Button variant="teritary" href="#">
          Explore Now &#8594;
        </Button>
      </div>
    </div>
  );
}
