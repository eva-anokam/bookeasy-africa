
import "./Choose.css"
import shield from "../assets/shield.svg"
import wallet from "../assets/wallet.svg"
import userHeadset from "../assets/user-headset.svg"
export default function Choose() {
    return (
      <div className=" choose">
        <div className="container">
          <h2>Why Choose Us?</h2>

          <div className="card-container">
            <div className="card ">
              <div className="img-container">
                <img src={shield} alt="" />
              </div>
              <h3>Verified Listing</h3>
              <p>
                Browse through our verified listings and secure your perfect
                accommodation without the worry of scams.
              </p>
            </div>

            <div className="card ">
              <div className="img-container">
                <img src={wallet} alt="" />
              </div>
              <h3>Secure Payment Process</h3>
              <p>
                Your transactions are protected every step of the way with our
                secure payment system.
              </p>
            </div>

            <div className="card ">
              <div className="img-container">
                <img src={userHeadset} alt="" />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Have questions or need assistance? Our support team is available
                round-the-clock to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}