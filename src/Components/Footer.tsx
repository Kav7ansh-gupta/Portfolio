import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-purple-400 mt-10 p-10 absolute md:block hidden">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter size={36} />
            </a>
            <a>
              <FaYoutube size={36} />
            </a>
            <a>
              <FaFacebook size={36} />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
