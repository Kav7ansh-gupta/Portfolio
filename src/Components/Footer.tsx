const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-2xl text-gray-400 p-5 absolute md:block hidden bg-white/10 border-t-1">
        <p>Portfolio Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
