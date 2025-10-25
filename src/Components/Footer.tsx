const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-3xl text-gray-400 p-5 absolute md:block hidden">
        <aside>
          <p>Portfolio Copyright © {new Date().getFullYear()}</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
