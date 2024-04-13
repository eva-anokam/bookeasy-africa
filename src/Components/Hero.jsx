import Button from "./Common/Button";
import hero from "../assets/hero.svg"
import "../Components/Hero.css"
import Banner from "./Banner";
import Explore from "./Explore";
export default function Hero() {
    return (
      <div className="hero-main">
        <div className="section hero-container ">
          <div className=" flex-container container">
            <div className="text flow-content">
              <h1>Rent a Home with Peace of Mind...</h1>
              <p>
                Book Easy takes the hassle out of finding accommodation. We
                offer secure bookings, transparent prices (no hidden fees!), and
                easy searching - all on your phone!
              </p>
              <Button variant="primary" href="">
                Get Started &#8594;
              </Button>
            </div>
          </div>
        </div>

        <Banner />
        <Explore />
      </div>
    );
}