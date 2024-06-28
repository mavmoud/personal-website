import "./style/Footer.css";

function Footer() {
  const copyright = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="footerLinks">
          <div className="links">
            <div>
              <a
                className="socialLinks"
                href="mailto:Mahmoud%20M.%3cmm@mahmoud.cam%3e"
                target="_blank"
              >
                <p>Contact</p>
              </a>
            </div>
            <div>
              <a
                className="socialLinks"
                href="https://github.com/mavmoud"
                target="_blank"
              >
                <p>Github</p>
              </a>
            </div>
            <div>
              <a
                className="socialLinks"
                href="https://linkedin.com/in/mavmoud"
                target="_blank"
              >
                <p>Linkedin</p>
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>© {copyright}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
