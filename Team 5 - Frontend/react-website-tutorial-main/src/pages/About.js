import React from "react";
import { Link } from "react-router-dom";
// import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <h1>Our Purpose</h1>
      <div className="card-container">
        <div className="card">
          <Link to="/card1">
            <img
              src="https://satyarthi.org.in/wp-content/uploads/2021/09/girl-student_6139ecd847750.jpg"
              href="https://www.studyguide360.com/2017/06/class-11.html?m=1"
              alt="Avatar"
            />
          </Link>
          <div className="container">
            <h4>
              <b>Children Education</b>
            </h4>
          </div>
        </div>
        <div className="card">
          <Link to="/card2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_HXeGBCRQ0h1OtETUn8ogfkF2KSEQJPFJnw&usqp=CAU"
              href="https://www.androidauthority.com/free-learning-resources-1101787/"
              alt="Avatar"
            />
          </Link>
          <div className="container">
            <h4>
              <b>Women Empowerment</b>
            </h4>
          </div>
        </div>
        <div className="card">
          <Link to="/card3">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.k-skjlivGh9SATJDNhzu-wHaE6&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </Link>
          <div className="container">
            <h4>
              <b>Education For Economically Weaker Section</b>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
