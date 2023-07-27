import React from 'react';
import '../pages/About.module.css';

function AboutUs() {
  return (
    <>
      <section>
        <div>
          <h3 id="about">About Us</h3>
          <div className="content">
            <p>We are a dynamic and innovative company specializing in three key verticals: Cyber Security, Digital</p>
            <p>Marketing & Advertising, and IT Solutions and Services. Our mission is to empower businesses and</p>
            <p>individuals with cutting-edge technologies and strategies that drive exceptional results.</p>
          </div>
        </div>
        <div>
          <h3>At Golden Royce Design</h3>
          <div className="content">
            <p>we pride ourselves on our client-centric approach, partnering with you every step of the way to</p>
            <p>understand your goals, challenges, and aspirationss. we are driven by a passion for innovation, excellence,</p>
            <p>and delivering measurable results. when you choose us, you gain a trusted partner committed to your success.</p>
          </div>
        </div>
      </section>
      <p id="connect">Let's Connect</p>
      <div className="expectation">
        <p>At Golden Royce Design,</p>
        <h2>we don't just meet expectations; we exceed them.</h2>
      </div>
      <section id="section-one">
        <p id="whyUs">Why Us</p>
        <p id="Gold">Why Choose Golden Royce Design?</p>
        <div className="container">
          <div className="box">
            <p>UNPARALLELED EXPERTISE</p>
          </div>
          <div className="box">
            <p>CLIENT CENTRIC APPROACH</p>
          </div>
          <div className="box">
            <p>CUTTING EDGE TECHNOLOGIES</p>
          </div>
        </div>
      </section>
      <div>
        <p>So basically we're saying,</p>
        <p>Choose Golden Royce Design as your trusted partner for cyber security, digital</p>
        <p>marketing & advertising, and IT solutions and services. With our comprehensive</p>
        <p>expertise, client-centric approach, and dedication to staying at the forefront of</p>
        <p>technology, we are committed to helping your business thrive in the digital age.</p>
      </div>
    </>

  )
}

export default AboutUs