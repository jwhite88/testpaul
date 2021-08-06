import React from "react";

function Resume() {
  return (
    <section class="container">
      <h1 className="top-title">Resume</h1>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Paul G. Turner</h2>

          <a
            href="https://github.com/Pgturn68/React-Portfolio/raw/main/docs/Document%207.docx"
            class="link"
          >
           <h4>Download My Resume</h4>
          </a>

          <ul>
            <li>
              A hard worker and fast learner who is always ready to go
              the extra mile.
              To view my complete work history please download a 
              current copy of my resume.
            </li>
          </ul>

      
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Skills</h2>
          <ul>
            <li>
            <h5>My current skill set not only in programming include.</h5>
            Graphic design (Photoshop, Illustrator) Videography, Video Editing (Adobe Premiere Pro), Motion graphics (Adobe After Effects) Adobe Audition, Adobe Media Encoder.Programming skills I am familiar with HTML, CSS (Bootstrap, Bulma), JavaScript, jQuery, React.js,<br /> As well as Express.js and Node.js
          
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
