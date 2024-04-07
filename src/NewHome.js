import React from 'react';
import './NewHome.css';
import scheduleimg from "./schedule-gen.png";
import breaktime from "./BreakTime.png";
import allSkii from  "./Allskii.png";
import wahidLogo from "./Wahid-logo.png";
import compLogo from "./comp-logo.png";

function NewHome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wahidLogo} className="App-logo" alt="logo" />
        <nav>
          {/* <a href="/services">Services</a>
          <a href="/about">About</a> */}
          {/* <a href="/contact">Contact</a> */}
          <button className="talk-button">CONTACT</button>
        </nav>
      </header>
      <main className="App-main">
        <h1>Wahid Hoji Aminullah {"- - > "}Personal Portfolio</h1>
        <p>I am a passionate software engineering student, committed 
            to delivering impactful solutions. My online portfolio 
            features my projects, skills, and academic accomplishments. 
            I am dedicated to excellence and strive to achieve the highest 
            quality in everything I do. Here are some of the projects that I worked on:</p>
        <div className='images-to-show'>
        <img src={allSkii} className="skii" alt="img" />
        <img src={scheduleimg} className="schedule" alt="img" />
        <img src={breaktime} className="schedule" alt="img" />

        </div>
        <button className="learn-more-button">LEARN MORE</button>
      </main>
      <section className="App-services">
        
        <div className="service">
          <h2> AutoArchitect AI: General Application Builder using a LLM (Current Project)</h2>
          <p>AutoArchitect AI is my project aimed at simplifying web development for 
            small business owners and creators, using advanced technologies to offer
            personalized, evolving web solutions. This initiative not only democratizes web 
            building but also fosters a platform for creativity and shared stories, 
            reflecting a collective spirit of innovation.</p>
        </div>
        <div className="service">
          <h2>AllSkii</h2>
          <p></p>
        </div>
        <div className="service">
          <h2>Schedule Generator</h2>
          <p>I led a project to create a Wildlife Schedule Generator, working with Java and MySQL to improve
             how an organization handles tasks and coordinates with volunteers and veterinarians. As the team 
             leader of four students, I guided the development, focusing on automating schedules to reduce conflicts 
             and enhance efficiency. I personally oversaw the creation of detailed test cases, ensuring the system's reliability 
             by rigorously testing for schedule overlaps, resource allocation issues, and ensuring task priorities are managed 
             effectively. My leadership not only streamlined operations but also significantly improved the system's quality.</p>
        </div>
        <div className="service">
          <h2>BreakTime</h2>
          <p>I'm studying software engineering and noticed there weren't good places for movie 
            and anime fans to talk about what they love. So, I started BreakTime with some friends 
            from school. It's an app that suggests movies and shows you might like based on your tastes 
            and lets you leave reviews. Our goal is to build a fun community where fans can really get into 
            talking about their favorite movies and shows.</p>
        </div>
      </section>
      <section className='courses'>
      <div className="skil">
       <div className='first-skill'>
        <h2>My Skills:</h2>
         
        <span>{"⦾"} JavaScript, </span>
        <span>Java, </span>
        <span>C, C++, C#, </span>
        <span>Python, </span>
        <span>TypeScript, </span>
        <span>HTML (markup language)</span>
         <img src={compLogo} className='comp-logo'></img> 
     </div>
        </div>
        {/* <div className="tech-logos">
            <img src={javaLogo} alt="Java" className="tech-logo" />
            <img src={gitLogo} alt="Git" className="tech-logo" />
            <img src={awsLogo} alt="AWS" className="tech-logo" />
            <img src={linuxLogo} alt="Linux" className="tech-logo" />
        </div> */}
      </section>
    </div>
  );
}

export default NewHome;
