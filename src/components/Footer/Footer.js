import "./footer.css";
import footerlogo from "../../assets/images/Wati-Logo-White-ou6qqtwk7i3dbcdiygtm3pi5a5dlfz6qav5pym3p4k.png";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer">
        <div className="footer__item">
          <div className="footer-img">
            <img src={footerlogo}></img>
            <p>
            WATI is a Multi-Agent WhatsApp Support Tool with No-Code Chatbot Builder. It is built on WhatsApp APIs.
            </p>
          </div>
        </div>
        <div className="footer__item">
          <h6>About Us</h6>
          <a href="#">APIs</a>
          <a href="#">Support</a>
          <a href="#">Chatbot</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer__item">
          <h6>About Us</h6>
          <a href="#">Blog</a>
          <a href="#">Chatbot</a>
          <a href="#">APIs</a>
          <a href="#">Support</a>
        </div>
        <div className="footer__item">
          <h6>About Us</h6>
          <a href="#">Blog</a>
          <a href="#">Chatbot</a>
          <a href="#">Blog</a>
          <a href="#">APIs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
