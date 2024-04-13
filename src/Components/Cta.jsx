import google from "../assets/google.svg"
import apple from "../assets/apple.svg"
import mockup from "../assets/mockup.svg"
import "./Cta.css"
export default function Cta() {
    return (
      <div className="cta">
        <div className="container cta-container">
          <div className="text flow-content">
            <h2>Download Now</h2>

            <p>
              Say goodbye to scams with our secure platform for finding
              accommodation. Experience peace of mind with BookEasy – your
              trusted solution for hassle-free and secure stays."
            </p>

            <div className="icons">
              <div>
                <img src={google} alt="" />
                <p>
                  <span>Download it on</span> Google Play
                </p>
              </div>

              <div>
                <img src={apple} alt="" />
                <p>
                  <span>Download it on</span> Apple Store
                </p>
              </div>
            </div>
                </div>
                
                <div className="img-container">
                    <img src={mockup} alt="" />
                </div>
        </div>
      </div>
    );
}