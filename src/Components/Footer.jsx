import Logo from "./Common/Logo";

import { FaFacebook, FaInstagram, FaLinkedin, FaX, FaYoutube } from "react-icons/fa6";

import "./Footer.css"
export default function Footer() {
  return (
    <footer>
      <div className="">
        <div className="footer-top container">
          <div>
            <Logo />
          </div>

          <div className="small-flex">
            <h3>Why BookEasy?</h3>
            <ul>
              <li>Rent space</li>
              <li>List your property</li>
              <li>Tenant verification</li>
              <li>Landlord verification</li>
              <li>Secured Payment</li>
            </ul>
          </div>

          <div className="small-flex">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>FAQs</li>
              <li>Support</li>
              <li>Career</li>
              <li>Terms of service</li>
            </ul>
          </div>

          <div className="small-flex">
            <h3>Contact Us</h3>
            <ul>
              <li>info@bookeasy.com</li>
              <li>+2348043456821</li>
              <li>No. 190 okena street off zuma rock, excellent grade</li>
            </ul>
          </div>
        </div>
        <div className=" footer-bottom">
          <div className="container flex-container footer-bottom-container">
            <p>&copy; 2024 BookEasy. All rights reserved.</p>

            <div className="flex-container">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaX />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
