
import Button from "./Common/Button";
import Logo from "./Common/Logo";

import "../Components/Header.css"

export default function Header() {
    return (
      <header className="flex-container container">
            <Logo variant="default" />
                <div className="menu-icons">
                    <input type="checkbox" id="menu-bar" />
                    <label htmlFor="menu-bar">
                        <div className="icon-container">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>

                        </div>
                    </label>
            <nav className="nav" id="nav">
          <ul className="nav-list">
            
                    <li><a href="#">Rent Space</a></li>
                    <li><a href="#featured">List your Property</a></li>
                    <li><a href="#blog">Contact Us</a></li>
                    <li><a href="#about">About</a></li>
          </ul>
          <div className="btn-container">
            <Button
              variant="secondary"
              onClick={() => console.log("secondary button")}
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              onClick={() => console.log("Primary button")}
            >
              Sign Up
            </Button>
          </div>
        </nav>
                </div>
      </header>
    );
}