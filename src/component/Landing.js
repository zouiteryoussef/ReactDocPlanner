import React from "react";
import "../styles.css";

class Landing extends React.Component {
  render() {
    return (
      <section class="lead-section">
        <div class="lead-logo">
          <img src="https://www.docplanner.com/img/sygnet.png" alt="" />
        </div>
        <h1 class="lead-title">Making the healthcare experience more human</h1>
        <div class="lead-section-content">
          <div class="lead-introduction">
            <p>
              We want patients to find the perfect doctor and book an
              appointment in the most easy way. The patient journey should be
              enjoyable, and that's why we are always next to them: to help them
              find the best possible care. Anytime, anywhere.
            </p>
          </div>
          <div class="lead-introduction">
            <p>
              We also help doctors to better manage their practice and build
              their online reputation. With our integrated end-to-end solution,
              doctors are able not only to improve their online presence, but
              also to devote their time to what really matters: their patients.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
