const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-xl text-gray-400 py-2 bg-white/20 border-t-1">
        <p>Portfolio Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
