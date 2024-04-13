import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/logo-white.svg"
import "../Common/Logo.css";

export default function Logo({variant}) {
  return (
    <div className="logo-container flex-container">
      <img src={variant === "default" ? logo : logoWhite} alt="" />
      <p className={variant === "default" ? "logo-text" : "logo-white"}>BookEasy</p>
    </div>
  );
}
