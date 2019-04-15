import React from 'react'

export default function resume() {
  return (
    <section id="resume">
    {/* Education
  ----------------------------------------------- */}
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
        <img className="profile-pic" src="images/portfolio/green.png" alt />

      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>University of Greenwich London</h3>
            
            <p className="info">Master in Facility and Real Estate Management <br></br> Master Thesis 'Facilitating the way Cloud personnel work in the cloud<span>•</span> <em className="date">Feb 2019</em></p>
            
            <p>
              My Master Thesis focused on facilitating the way cloud personnel work in the cloud.
              This research focused on how the latest technologies like Artificial Intelligence, Machine and Deep Learning
              facilitate the way ICT and FREM personnel work in the cloud.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Rotterdam Business School</h3>
            <p className="info">Pre-Masters  Logistics and Supply Chain Managament <span>•</span> <em className="date">Feb 2017</em></p>
            <p>
              The first part of my premasters focused on Financial Accounting where I learnt the basics
              of accounting and finance, FIFO and LIFO.
              <br></br>
              The second part ofmy premasters focused on Logistics and Supply Chain managament where 
              i learnt the basics of  Logistics and how Supply chain can be properlly implemented. 
            </p>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div> {/* End Education */}
    {/* Work
  ----------------------------------------------- */}
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>Awesome Design Studio</h3>
            <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Super Cool Studio</h3>
            <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
            <p>
              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
              ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
            </p>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div> {/* End Work */}
    {/* Skills
  ----------------------------------------------- */}
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
        <div className="bars">
          <ul className="skills">
          <li><span className="bar-expand css" /><em>React</em></li>
          <li><span className="bar-expand css" /><em>React/Redux</em></li>
          <li><span className="bar-expand html5" /><em>Node/Express</em></li>
          <li><span className="bar-expand html5" /><em>CSS</em></li>
            <li><span className="bar-expand html5" /><em>HTML5</em></li>
          <li><span className="bar-expand html5" /><em>AWS</em></li>
          <li><span className="bar-expand jquery" /><em>TypeScript</em></li>
          <li><span className="bar-expand jquery" /><em>React Native</em></li>  
            <li><span className="bar-expand jquery" /><em>jQuery</em></li>
          </ul>
        </div>{/* end skill-bars */}

        
      </div> {/* main-col end */}
    </div> {/* End skills */}
  </section> 
);
}


