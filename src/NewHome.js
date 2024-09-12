import React, { useState, useEffect, useRef } from 'react';
import './NewHome.css';
import { Analytics } from '@vercel/analytics/react';
import scheduleimg from "./schedule-gen.png";
import breaktime from "./BreakTime.png";
import allSkii from "./Allskii.png";
import wahidLogo from "./Wahid-logo.png";
import compLogo from "./comp-logo.png";
import study from "./studying.png";
import ContactInfo from './ContactInfo';
import Contact from './Contact';

function NewHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add click event listener on the document
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={wahidLogo}
          className="App-logo"
          alt="logo"
          onClick={() => window.open('https://www.linkedin.com/in/wahid-hoji')}
        />
        <nav>
          <button className="talk-button" onClick={toggleSidebar}>
            CONTACT
          </button>
        </nav>
      </header>
      <main className="App-main">
        <h1>Wahid Hoji Aminullah {" -> "}Personal Portfolio</h1>
        <p>
          I am a passionate software engineering student, committed to
          delivering impactful solutions. My online portfolio features my
          projects, skills, and academic accomplishments. I am dedicated to
          excellence and strive to achieve the highest quality in everything I
          do. Here are some of the projects that I worked on:
        </p>
        <div className="images-to-show">
          <img src={allSkii} className="skii" alt="img" />
          <img src={scheduleimg} className="schedule" alt="img" />
          <img src={breaktime} className="schedule" alt="img" />
        </div>
        <button
          className="learn-more-button"
          onClick={() => window.open('https://github.com/oneHalo')}
        >
          LEARN MORE
        </button>
      </main>
      <section className="App-services">
        <div className="service">
          <h2> AutoArchitect AI: General Application Builder using a LLM (Current Project)</h2>
          <p>
            AutoArchitect AI is my project aimed at simplifying web development for small business owners and
            creators, using advanced technologies to offer personalized, evolving web solutions. This initiative
            not only democratizes web building but also fosters a platform for creativity and shared stories,
            reflecting a collective spirit of innovation.
          </p>
        </div>
        <div className="service">
          <h2>AllSkii</h2>
          <p>
            As part of a 7-member team, I played a key role in the development of AllSkii, a platform designed to
            simplify the skiing experience in Canada. My contributions included crafting the front-end interface and
            integrating backend services for user authorization, aiming to provide skiers with essential, up-to-date
            condition reports on Alberta's major ski hills.
          </p>
        </div>
        <div className="service">
          <h2>Schedule Generator</h2>
          <p>
            I led a project to create a Wildlife Schedule Generator, working with Java and MySQL to improve how an
            organization handles tasks and coordinates with volunteers and veterinarians. As the team leader of four
            students, I guided the development, focusing on automating schedules to reduce conflicts and enhance
            efficiency. I personally oversaw the creation of detailed test cases, ensuring the system's reliability by
            rigorously testing for schedule overlaps, resource allocation issues, and ensuring task priorities are
            managed effectively. My leadership not only streamlined operations but also significantly improved the
            system's quality.
          </p>
        </div>
        <div className="service">
          <h2>BreakTime</h2>
          <p>
            I'm studying software engineering and noticed there weren't good places for movie and anime fans to talk
            about what they love. So, I started BreakTime with some friends from school. It's an app that suggests
            movies and shows you might like based on your tastes and lets you leave reviews. Our goal is to build a fun
            community where fans can really get into talking about their favorite movies and shows.
          </p>
        </div>
      </section>
      <section className='skills-study'>
        <div className="study-row">
          <div className="study-text">
            <h2>I'm fluent in:</h2>
            <p>
              <span>JavaScript, </span>
              <span>Java, </span>
              <span>C, C++, C#, </span>
              <span>Python, </span>
              <span>TypeScript, </span>
              <span>HTML (markup language)</span>
            </p>
          </div>
        </div>
        <div className="study-row">
          <div className="study-text">
            <h2>I am experienced in:</h2>
            <p>
              <span>GIT, </span>
              <span>React, </span>
              <span>AWS, </span>
              <span>Node.js, </span>
              <span>MySQL, </span>
              <span>NoSQL, </span>
              <span>RegEx, </span>
              <span>MongoDB, </span>
              <span>Unix, </span>
              <span>Linux, </span>
              <span>Plotly, </span>
              <span>Matplotlib, </span>
              <span>Jupyter Notebook, </span>
              <span>PIT (Testing), </span>
              <span>Selenium (Testing), </span>
              <span>PyTorch </span>
            </p>
          </div>
        </div>
      </section>
      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
      >
        <ContactInfo />
        <button className="close-button" onClick={toggleSidebar}>
          Close
        </button>
      </div>
      <footer>
        This page is created and maintained by: Wahid H. Aminullah using Node.js,
        GitHub and Vercel
      </footer>
      <Analytics />
    </div>
  );
}

export default NewHome;
