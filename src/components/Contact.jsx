import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";


function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">


      <h1 className="section-title">
        Contact Me
      </h1>


      <p className="section-subtitle">
        Have a project idea or want to collaborate? Feel free to reach out.
      </p>



      <div className="contact-container">


        <div className="contact-info">


          <h2>
            Get In Touch
          </h2>



          <div className="contact-item">

            <FaEnvelope />

            <span>
              syedamuskanfatima512@gmail.com
            </span>

          </div>



          <div className="contact-item">

            <FaPhone />

            <span>
              +92 300 0000000
            </span>

          </div>



          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>
              Pakistan
            </span>

          </div>



          <div className="social-links">


            <a href="https://github.com/MuskanTechie">
              <FaGithub />
            </a>


            <a href="https://www.linkedin.com/in/muskan-fatima-46339734a?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <FaLinkedin />
            </a>


          </div>


        </div>




        <form className="contact-form">


          <input
            type="text"
            placeholder="Your Name"
          />



          <input
            type="email"
            placeholder="Your Email"
          />



          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>



          <button type="submit">
            Send Message
          </button>


        </form>



      </div>


    </section>
  );
}

export default Contact;