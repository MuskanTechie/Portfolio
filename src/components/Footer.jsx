import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">

      <div className="footer-content">

        <h3>Muskan Fatima</h3>

        <p>
          Full Stack Developer | React.js Developer
        </p>

        <div className="footer-links">
          <a href="https://github.com/MuskanTechie" target="_blank">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/muskan-fatima-46339734a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
            LinkedIn
          </a>

          <a href="mailto:syedamuskanfatima512@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Muskan Fatima. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;