import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal"; // Import the Fade component
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";

export const Footer = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className="footer p-10 bg-[rgba(0,0,0,0.1)] text-base-content">
      <div>
        <div className="navbar-start  w-full" >
          <Link to="/" className="text-xl font-bold text-teal" >
            <span className='mr-2'> <i className="fa-solid fa-earth-asia text-xl"></i></span>
            Language <span className={`${isDarkMode ? 'text-white' : "text-mn"}`}>Exchange</span>
          </Link>
        </div>
        <p className="text-sm w-[300px]">
          Language Exchange is a platform to connect tutors and learners worldwide.
          Learn, teach, and grow together!
        </p>
      </div>

      {/* Section 2: Quick Links */}
      <div>
        <span className="footer-title">Quick Links</span>
        <a href="#faq" className="link link-hover">FAQ</a>
        <a href="/" className="link link-hover">Home</a>
        <a href="/find-tutors" className="link link-hover">Find Tutors</a>
        <a href="/add-tutorials" className="link link-hover">Add Tutorials</a>
        <a href="/my-tutorials" className="link link-hover">My Tutorials</a>
      </div>

      {/* Section 3: Support */}
      <div>
        <span className="footer-title">Follow Us</span>
        <div className="flex justify-start items-start flex-col gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=100076935281732"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl space-x-3  py-2 hover:text-blue-600"
          >
            <i className="fab fa-facebook-square"></i> <span className=" hover:underline transition-all duration-500 ">Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kawsar-firoz-a140b9237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl space-x-3 py-2 hover:text-blue-600"
          >
            <i className="fab fa-linkedin"></i>
            <span className="hover:underline transition-all duration-500">Linkedin</span>
          </a>


          <a
            href="https://kawsarfiroz2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl space-x-3 py-2 hover:text-blue-600"
          >
            <i className="fas fa-briefcase"></i>
            <span className="hover:underline transition-all duration-500">Portfolio</span>
          </a>
        </div>
        {/* <a href="#contact-us" className="link link-hover">Contact Us</a>
        <a href="/privacy-policy" className="link link-hover">Privacy Policy</a>
        <a href="/terms-of-service" className="link link-hover">Terms of Service</a> */}
      </div>

      {/* <div>
        <span className="footer-title">Follow Us</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100076935281732"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kawsar-firoz-a140b9237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          
          <a
            href="https://kawsarfiroz2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="fas fa-briefcase"></i>
          </a>
        </div>
      </div> */}

    </footer>
  );
};
