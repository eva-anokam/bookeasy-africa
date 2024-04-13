import "../Components/Banner.css";
export default function Banner() {
  return (
    <div className="cta-position">
      <div className="cta flex-container">
        <div className="flex-container cta-text">
          <p className="main">100+</p>
          <p className="sub">
            <span>Happy</span>Clients
          </p>
        </div>

        <div className="flex-container cta-text">
          <p className="main">2k+</p>
          <p className="sub">
            <span>Verified</span>Listing
          </p>
        </div>

        <div className="flex-container cta-text">
          <p className="main">100%</p>
          <p className="sub">
            <span>CAC</span>Certified
          </p>
        </div>
      </div>
    </div>
  );
}
