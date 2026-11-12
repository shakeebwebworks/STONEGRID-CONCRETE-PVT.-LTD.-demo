import React from 'react';

export default function Hero() {
  return <section className="hero-section" id="home">
    <div className="hero-image" />
    <div className="hero-shade" />
    <div className="container hero-content">
      <div className="hero-copy reveal">
        <span className="eyebrow eyebrow-light"><span /> PRECAST CONCRETE • ARCHITECTURAL SOLUTIONS</span>
        <h1>Engineering<br /><em>concrete.</em><br />Defining spaces.</h1>
        <p>Premium precast concrete solutions designed for strength, durability and modern architecture.</p>
        <div className="hero-actions">
          <a className="btn-primary-custom" href="#products">Explore products <i className="bi bi-arrow-up-right" /></a>
          <a className="text-link-light" href="#contact">Request a quote <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="hero-foot">
        <span>BUILT FOR THE WAY WE LIVE</span>
        <span className="hero-scroll"><i className="bi bi-arrow-down" /> SCROLL TO EXPLORE</span>
      </div>
    </div>
    <div className="hero-index">01 <span>/</span> 06</div>
  </section>;
}