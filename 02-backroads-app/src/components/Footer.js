import { PageLinks } from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks links="footer-links" link="footer-link"></PageLinks>
      <SocialLinks
        parentClass="footer-icons"
        itemClass="footer-icon"
      ></SocialLinks>

      <p className="copyright"> 
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
