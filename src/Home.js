import React from "react";
import ReactDOM from 'react-dom/client';
import TypeWriter from 'typewriter-effect';
import {Analytics} from '@vercel/analytics/react';
import './Home.css';
import Contact from './Contact';
import image from './myimage.jpg';
import image1 from './myimage5.jpg';
import breaktime from './BreakTime.png';
import sched_gen from './schedule-gen.png';
import airbnb from './airbnb.png';


function Home(){


    function goToBreakTime(){

    }

    function goToContact(){
        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<Contact />);

    }

    return(
    <div className="main-bod">

   
        
        
   <div className="main-container">
     
            
     <div className="main-content">
       
       <section className="home-section">
       <div className="Nav">
       <nav >
        <ul>
            <li><a>Home</a></li>
           
            <li><a href="#" onClick={goToContact}>Contact</a></li>
        </ul>
    </nav>
    </div>  
    
         <div className="my-name">
            
           <h1 className="name">Hello, my name is  </h1>
           <h2 className="name"> Wahid H. Aminullah</h2>
            {/* <img src={image1} className="myimage"/> */}
         </div>
         <div class="intro">
           <span class="text first-text">Who am I? I am a(n)</span>
           <span class="text second-text">            
           <TypeWriter 
                options={{
                    strings: ['Aspiring Software Engineering Student', 'Developer!','Tenacious Problem Solver!',  'Tech Enthusiast (Special appreciation for Cybersecurity and Cloud)!', 'Life Long Learner!', 'Soccer Fan!'],
                    loop:true,
                    autoStart:true,
                    delay: 60,
                    deleteSpeed: 10
                }}
           />
           
           </span>
          
           <p className="little-intro">I am a 3rd year Software Engineering student at the Schulich School of Engineering. 
                Ever since I was young, 
                I had a passion for coding. 
                I believe that technology can create a better tomorrow!</p>
        
         </div>
         <div className="Projects">

        <span className="Project-title"> 
        <TypeWriter 
                options={{
                    strings: ['Projects I have worked on: '],
                    loop:true,
                    autoStart:true,
                    delay: 60,
                    deleteSpeed: 10
                }}
           />
        </span>
        <div className="Movie-Rec">
        
        <p className="Air-intro"> <span className="linebreak"><img className="breaktime" src={breaktime} onClick={goToBreakTime}/></span> 
       <span className="bold-black"> Recommending Movies Using Content Based Approach: <span className="bold"> BreakTime</span></span></p>

                <p className="Explanation-paragraph"> As a passionate student of software engineering, I set out on an exciting adventure to advance my 
                knowledge and investigate the exciting field of movie recommendation systems. I saw the need for a place where a community of film and anime 
                aficionados could come together to share their cinematic experiences because there was a clear lack of platforms where users could review and rate movies or 
                TV episodes in a genuine manner. Inspired by this idea, I took the initiative to form a cooperative <span className="bold"> team</span> with students studying computer science 
                and software engineering. We came up with BreakTime, an application that <span className="bold"> recommends</span> movies/ tv shows and anime based on what you have watched, liked and preferred, and leave a review
                so other people of the community will also watch it,<span className="bold"> creating</span> a community of film lovers, and where people can truly share their opinions without thinking it won't make a difference. 
                The true <span className="bold">purpose </span>of BreakTime is to create a lively community that genuinely appreciates film as an art form. 
                For a more in-depth exploration of BreakTime, I invite you to visit my GitHub repository: <a className="bold" href="https://github.com/oneHalo/Movie-Recomendation-System">OneHalo</a></p>
                 
        </div>
        <div className="Schedule-Gen">
        <p className="Air-intro"> <span className="linebreak"><img className="wildlife" src={sched_gen} /></span>
        
       <span className="bold-black"> WildLife Schedule</span> <span className="bold">Generator: </span></p>
        
        <p className="Explanation-paragraph">  I spearheaded a project centered around the creation of a Wildlife Schedule 
        Generator reflecting my commitment to utilizing technology for impactful solutions and make a difference. 
        Leading a team of four software and electrical engineering students, we chose Java as the programming 
        language to develop a robust system for an organization prioritizing time-sensitive tasks,
         proficiently managing volunteers, and coordinating with veterinarians. 
         In the <span className="bold">initial phase</span>, I conducted a meticulous requirement analysis, designing a 
         database structure, using <span className="bold">mySQL</span>, capable of storing crucial data such as animal care schedules, 
         staff availability, and resource allocation information. 
         Because of my database design, the backend architecture facilitated seamless retrieval and modification of schedules. The project's standout
        feature was the successful automation of task allocation, a result of our meticulous consideration for staff 
        qualifications, animal care requirements, and resource availability. Our collaboration effectively reduced scheduling conflicts by prioritizing 
        time-sensitive tasks, resulting in heightened operational efficiency and a smoother workflow.
        To ensure the reliability and robustness of our system, <span className="bold">I took the lead</span> in developing comprehensive test cases for schedule conflicts, resource conflicts, 
        and time-sensitive tasks, contributing to a reduction in critical defects and an overall enhancement in software quality. For a more in-depth exploration of WildLife Schedule Generator, 
        I invite you to visit my GitHub repository:<a className="bold" href="https://github.com/oneHalo/WildLife-Rescue-Schedule-Generator-Project"> {""}OneHalo</a></p>
        </div>
        <div className="Airnb">
            <p className="Air-intro"> <span className="linebreak"> <img className="airbnb-img" src={airbnb}></img></span>
            <span className="bold-black"> AirBnb</span> <span className="bold">Clone: </span></p>
        
            <p className="Explanation-paragraph"> As a software engineering student, I undertook an ambitious venture to create an Airbnb clone, 
            a venture that demonstrated my ability in end-to-end development and my commitment to deliver a polished and complete project on my own. 
            At the heart of the project was a responsive and user-friendly React interface, where I seamlessly integrated dynamic components into property lists, 
            experience lists, search functions and user reviews, ensuring an engaging and interactive user experience. With a Node.js and MongoDB background, I improved the project
             and its features by implementing <span className="bold">efficient</span> storage and <span className="bold">retrieval mechanisms</span>. The architectural backbone of the system was a carefully 
             designed relational database that used all SQL capabilities for optimal data management. This project demonstrates my expertise in full development and demonstrates my 
             ability to transform <span className="bold">conceptual</span> ideas into concrete and polished software. For a more in-depth exploration of my Airbnb clone,  I invite you to visit my GitHub repository: <a className="bold" href="https://github.com/oneHalo/AirBnb-Clone"> OneHalo</a></p>
        </div>
        
       

</div> 
        
    
         <div className="skills">
            
            Programming Languages I have used before: </div>
         <div className="frontend">
           <span>JavaScript, </span>
           <span>Java, </span>
           <span>C, C++, C#, </span>
           <span>Scala, </span>
           <span>Python, </span>
           <span>TypeScript, </span>
           <span>HTML (markup language)</span>
         </div>
         <div className="skills"> Frameworks and technologies I have worked with: </div> 
          <div className="technology">
           <span>GIT, </span>
           <span>React, </span>
           <span>AWS, </span>
           <span>Node.js </span>
          </div> 

       


       </section>
      
     </div>
   </div>
                <Analytics/>
   <footer> This page is created and maintained by: Wahid H. Aminullah using Node.js, GitHub and Vercel </footer>
 


    </div>
    );


}
export default Home;