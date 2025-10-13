import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-purple-400 mt-10 p-10 absolute md:block hidden">
        <div className="mb-4">
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/kav7ansh_gupta?s=21">
              <FaTwitter size={36} />
            </a>
            <a href="http://youtube.com/@codewithkav7ansh?si=rLOOMHN02zUqz9Ra">
              <FaYoutube size={36} />
            </a>
            <a href="https://www.instagram.com/code_with_kav7ansh?igsh=YWkxd3hzcDluOWYw&utm_source=qr">
              <FaInstagram size={36} />
            </a>
          </div>
        </div>
        <aside>
          <p>Copyright © {new Date().getFullYear()}</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
