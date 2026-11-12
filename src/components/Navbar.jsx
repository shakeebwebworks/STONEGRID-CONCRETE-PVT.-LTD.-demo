import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Products', '#products'], ['Gallery', '#gallery'], ['Process', '#process']];
  const close = () => setOpen(false);
  return <nav className="navbar navbar-expand-lg navbar-dark site-nav fixed-top">
    <div className="container">
      <a className="navbar-brand brand-lockup" href="#home" onClick={close}>
        <span className="brand-mark"><i className="bi bi-grid-3x3-gap-fill" /></span>
        <span><strong>STONEGRID</strong><small>CONCRETE PVT. LTD.</small></span>
      </a>
      <button className="navbar-toggler" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto align-items-lg-center">
          {links.map(([label, href]) => <li className="nav-item" key={label}><a className="nav-link" href={href} onClick={close}>{label}</a></li>)}
          <li className="nav-item ms-lg-3"><a className="nav-cta" href="#contact" onClick={close}>Let's talk <i className="bi bi-arrow-up-right" /></a></li>
        </ul>
      </div>
    </div>
  </nav>;
}