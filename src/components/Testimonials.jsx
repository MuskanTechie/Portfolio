import "./Testimonials.css";

import {
  FaQuoteLeft
} from "react-icons/fa";


function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">


      <h1 className="section-title">
        Testimonials
      </h1>


      <p className="section-subtitle">
        Feedback and appreciation from people I have worked and learned with.
      </p>



      <div className="testimonial-container">



        <div className="testimonial-card" data-aos="zoom-in" >


          <div className="quote-icon">
            <FaQuoteLeft />
          </div>


          <p>
            "Muskan is a dedicated learner with strong problem-solving skills
            and a passion for software development."
          </p>


          <h3>
            Project Supervisor
          </h3>


        </div>





        <div className="testimonial-card">


          <div className="quote-icon">
            <FaQuoteLeft />
          </div>


          <p>
            "Her ability to learn new technologies and implement projects
            shows her commitment towards continuous development."
          </p>


          <h3>
            Team Member
          </h3>


        </div>



      </div>


    </section>
  );
}

export default Testimonials;