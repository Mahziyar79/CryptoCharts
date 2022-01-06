import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const xisTop = window.scrollY > 100;
      if (xisTop) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  });
  console.log(isTop);
  return (
    <>
      <div className="top_navbar">
        <p>
          HUGE news to share: We just raised $8.3 Mn in Series A led by Sequoia
          India Read More💥
        </p>
      </div>
      <header className={`main-header ${isTop ? "pos-abs" : ""}`}>
        <nav className={`nav ${toggle ? "nav__expanded" : ""}`}>
          <div className="nav__toggler" onClick={() => setToggle(!toggle)}>
            <div className="bar bar-one"></div>
            <div className="bar bar-two"></div>
            <div className="bar bar-three"></div>
          </div>
          <div className="right_bar">
            <a className="logo" href="#">
              <img src={`${logo}`} alt="logo"></img>
            </a>
            <ul className="list nav__list">
              <li className="nav__item">
                <a href="#">Home</a>
              </li>
              <li className="nav__item">
                <a href="#">Blog</a>
              </li>
              <li className="nav__item">
                <a href="#">Contact Us</a>
              </li>
              <li className="nav__item">
                <a href="#">About Us</a>
              </li>
              <li className="nav__item cta">
                <a href="#" className="btn btn--primary btn--block">
                  sign up
                </a>
              </li>
            </ul>
          </div>
          <div className="left_bar">
            <button className="signup-btn">sign up</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
