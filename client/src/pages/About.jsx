import React from "react";
import revalogo from "../assets/reva.png"
import collage from "../assets/collage.png"
import entrance from "../assets/entrance.png"
import lib from "../assets/lib.png"
import rangasthala from "../assets/rangasthala.png"
import student from "../assets/student.png";



const About = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff", padding: "20px" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px" }}>
        <img src={revalogo} alt="REVA Logo" style={{ height: "50px" }} />
        <div style={{ display: "flex", gap: "30px", fontSize: "18px", color: "black" }}>
          <span>Home</span>
          <span style={{ borderBottom: "3px solid orange", paddingBottom: "2px" }}>About</span>
          <span>community</span>
          <span>👤</span>
        </div>
      </nav>

      {/* Image Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", justifyItems: "center" }}>
        {/* Row 1 */}
        <img src={collage} alt="REVA Campus" className="w-[720px] h-[244px] object-cover ml-[500px]" />
         <img src={entrance} alt="Entrance" className="w-[400px] h-[245px] object-cover ml-[450px]" />
         <div></div>{/* Empty div to fill 3rd cell in first row */}

       {/* Row 2 */}
     <img src={student} alt="Students" className="w-[254px] h-[201px] object-cover ml-[250px]" />
     <img src={lib} alt="Library Block" className="w-[479px] h-[201px] object-cover" />
     <img src={rangasthala} alt="Open Theater" className="w-[210px] h-[202px] object-cover -ml-[240px]" />
      </div>
        

      {/* Info Box */}
      <div style={{ marginTop: "30px", backgroundColor: "#ffcc99", padding: "20px", borderRadius: "15px", maxWidth: "800px", margin: "40px auto", color: "black", fontSize: "16px", lineHeight: "1.6" }}>
        REVA University strives for academic excellence. Innovative pedagogy, best mentors, and faculty with vast industry experience offer modern education of global standards. Established in 2012 as REVA Group of Institutions, in less than a decade, the Government of Karnataka granted University status to REVA in 2013.
      </div>

      {/* Website link */}
      <div style={{ textAlign: "center", fontSize: "14px", marginTop: "10px", color: "black" }}>
        Visit our official website :
        <a href="https://www.reva.edu.in/" target="_blank" rel="noopener noreferrer" style={{ color: "orange", textDecoration: "none" }}> : https://www.reva.edu.in/</a>
      </div>
    </div>
  );
};

export default About;



