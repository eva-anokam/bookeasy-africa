import verified from "../assets/verified.svg";
import favourite from "../assets/favourite.svg";
import featured1 from "../assets/featured1.jpg";
import featured2 from "../assets/featured2.jpg";
import featured3 from "../assets/featured3.jpg";
import featured4 from "../assets/featured4.jpg";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg";
import pool from "../assets/pool.svg";
import guest from "../assets/guest.svg";

import "./Featured.css";
export default function Featured() {
  return (
    <div className="featured">
      <h2>Featured Properties</h2>

      <div className="container featured-container">
        <div className="featured-card">
          <div>
            <img src={featured1} alt="" />
          </div>
          <div className="featured-text flow-content">
            <div className="flex-container title">
              <div className="flex-container ">
                <h3>Bella View Duplex</h3>
                <img src={verified} alt="" />
              </div>
              <div className="favourite-container">
                <img src={favourite} alt="" />
              </div>
            </div>

            <div className="flex-container featured-details">
              <div className="flex-container">
                <img src={bed} alt="" />
                <p>4 bed</p>
              </div>

              <div className="flex-container">
                <img src={bath} alt="" />
                <p>4 bath</p>
              </div>

              <div className="flex-container">
                <img src={pool} alt="" />
                <p>Pool</p>
              </div>

              <div className="flex-container">
                <img src={guest} alt="" />
                <p>Guest house</p>
              </div>
            </div>

            <div className="flex-container pricing">
              <p>&#8358;2,000,000</p>
              <p>Book Now</p>
            </div>
          </div>
        </div>

        <div className="featured-card">
          <div>
            <img src={featured2} alt="" />
          </div>
          <div className="featured-text flow-content">
            <div className="flex-container title">
              <div className="flex-container ">
                <h3>Vincent Homes</h3>
                <img src={verified} alt="" />
              </div>
              <div className="favourite-container">
                <img src={favourite} alt="" />
              </div>
            </div>

            <div className="flex-container featured-details">
              <div className="flex-container">
                <img src={bed} alt="" />
                <p>3 bed</p>
              </div>

              <div className="flex-container">
                <img src={bath} alt="" />
                <p>3 bath</p>
              </div>

              <div className="flex-container">
                <img src={pool} alt="" />
                <p>Pool</p>
              </div>

              <div className="flex-container">
                <img src={guest} alt="" />
                <p>Guest house</p>
              </div>
            </div>

            <div className="flex-container pricing">
              <p>&#8358;1,300,000</p>
              <p>Book Now</p>
            </div>
          </div>
        </div>

        <div className="featured-card">
          <div>
            <img src={featured3} alt="" />
          </div>
          <div className="featured-text flow-content">
            <div className="flex-container title">
              <div className="flex-container ">
                <h3>Sammy's Duplex</h3>
                <img src={verified} alt="" />
              </div>
              <div className="favourite-container">
                <img src={favourite} alt="" />
              </div>
            </div>

            <div className="flex-container featured-details">
              <div className="flex-container">
                <img src={bed} alt="" />
                <p>6 bed</p>
              </div>

              <div className="flex-container">
                <img src={bath} alt="" />
                <p>6 bath</p>
              </div>

              <div className="flex-container">
                <img src={pool} alt="" />
                <p>Pool</p>
              </div>

              <div className="flex-container">
                <img src={guest} alt="" />
                <p>Guest house</p>
              </div>
            </div>

            <div className="flex-container pricing">
              <p>&#8358;4,000,000</p>
              <p>Book Now</p>
            </div>
          </div>
        </div>

        <div className="featured-card">
          <div>
            <img src={featured4} alt="" />
          </div>
          <div className="featured-text flow-content">
            <div className="flex-container title">
              <div className="flex-container ">
                <h3>Ann Apartments</h3>
                <img src={verified} alt="" />
              </div>
              <div className="favourite-container">
                <img src={favourite} alt="" />
              </div>
            </div>

            <div className="flex-container featured-details">
              <div className="flex-container">
                <img src={bed} alt="" />
                <p>4 bed</p>
              </div>

              <div className="flex-container">
                <img src={bath} alt="" />
                <p>4 bath</p>
              </div>

              <div className="flex-container">
                <img src={pool} alt="" />
                <p>Pool</p>
              </div>

              <div className="flex-container">
                <img src={guest} alt="" />
                <p>Guest house</p>
              </div>
            </div>

            <div className="flex-container pricing">
              <p>&#8358;2,000,000</p>
              <p>Book Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
