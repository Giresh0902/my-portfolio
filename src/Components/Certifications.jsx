import React from "react";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.png"
function certificates(){
    return (
      
        <section className="section-5">
            <h1>Certifications</h1>
            <h3>Full stack Web development</h3>
            <img src={p6} className="img" />
            <p>Completed "The Complete Full-Stack Web Development Bootcamp" covering MERN stack, HTML, CSS, JavaScript, and 
Bootstrap. Developed responsive, dynamic web applications with backend integration, REST APIs, and database 
management.</p>
<h1>Internship</h1>
            <h3>Code tech</h3>
            <img src={p7} className="img1" />
            <p>Completed a 4-week internship in MERN Stack Web Development at CODTECH IT Solutions, focusing on real-world web 
development practices. Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js through practical 
assignments and team collaboration. 
</p>
        </section>
    )
    
}

export default certificates;