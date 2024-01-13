import ReactDOM from 'react-dom/client';
import './Contact.css';
import TypeWriter from 'typewriter-effect';

import Home from './Home';
function Contact(){

    function gotoHome(){
        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<Home />);
    }

    return(
        <div className="main_container">
         
         <section className="home-section">
          <div className="Nav">
        <nav >
        <ul>
            <li><a href="#" onClick={gotoHome} >Home</a></li>
           
            <li><a >Contact</a></li>
           
        </ul>
        </nav>
        </div>
    
         
        <div className="first-par">
        
        <span className="Home-page">
        <TypeWriter 
                options={{
                    strings: ['Contact Page'],
                    loop:true,
                    autoStart:true,
                    delay: 60,
                    deleteSpeed: 10
                }}
           />
     
        </span>
        <p > I currently attend
            <span className="Highlight">Schulich School of 
            Engineering </span>at the <span className="red-Highlight">University of Calgary</span>, as 
            a 3rd year<span className="reg-highlight"> Software Engineering</span> student.

            For additional details or to initiate contact regarding potential 
            collaborations, kindly reach out to me at the following address:
            <span className="Highlight">
                Email:  
            </span>
               <a href="mailto:Wahidullah.hojiaminu@ucalgary.ca">Wahidullah.hojiaminu@ucalgary.ca </a> 

            <span className="after-main">Happy Coding!</span>     

                
        </p>
       
        </div>

        
        </section>
        <footer> This page is created and maintained by: Wahid H. Aminullah using Node.js, GitHub and Vercel </footer>
        </div>



    );



}
export default Contact;