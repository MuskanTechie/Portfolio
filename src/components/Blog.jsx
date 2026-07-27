import "./Blog.css";

import {
  FaPenNib
} from "react-icons/fa";


function Blog() {
  return (
    <section id="blog" className="blog" data-aos="fade-up">


      <h1 className="section-title">
        Blogs & Articles
      </h1>


      <p className="section-subtitle">
        Sharing my learning experiences, development journey, and technical insights.
      </p>



      <div className="blog-container">


        <div className="blog-card" data-aos="zoom-in">


          <div className="blog-icon">
            <FaPenNib />
          </div>



          <span className="blog-category">
            Web Development
          </span>



          <h2>
            Learning Web Development Journey
          </h2>



          <p>
            Sharing my experience of learning React.js, backend development,
            and building real-world projects while improving my skills as a
            Full Stack Developer.
          </p>



          <a href="/#" className="blog-btn">
            Read Article
          </a>



        </div>


      </div>


    </section>
  );
}

export default Blog;