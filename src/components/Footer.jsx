import React from 'react';

export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="row gy-5">
    <div className="col-lg-5"><a className="navbar-brand brand-lockup footer-brand" href="#home"><span className="brand-mark"><i className="bi bi-grid-3x3-gap-fill" /></span><span><strong>STONEGRID</strong><small>CONCRETE PVT. LTD.</small></span></a><p className="footer-about">Premium precast concrete solutions for boundaries, architecture and the spaces in between.</p></div>
    <div className="col-6 col-lg-2"><h6>EXPLORE</h6><a href="#about">About us</a><a href="#products">Products</a><a href="#gallery">Gallery</a><a href="#process">Our process</a></div>
    <div className="col-6 col-lg-2"><h6>PRODUCTS</h6><a href="#products">Compound walls</a><a href="#products">Breeze blocks</a><a href="#products">Concrete pavers</a><a href="#products">Custom precast</a></div>
    <div className="col-lg-3"><h6>CONNECT</h6><a href="#contact">Contact the team</a><span className="footer-placeholder">Phone & email to be confirmed</span><a href="#contact">Instagram <i className="bi bi-arrow-up-right" /></a></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Stonegrid Concrete Pvt. Ltd.</span><span>ENGINEERING CONCRETE. DEFINING SPACES.</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>;
}