import React, { useState } from 'react';
import { products, gallery } from '../data';

function SectionHead({kicker, title, text, light=false}) {
  return <div className={`section-head reveal ${light ? 'text-light' : ''}`}>
    <span className="eyebrow"><span /> {kicker}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

export function About() {
  return <section className="section-pad about-section" id="about">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 reveal">
          <div className="about-image-wrap">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Contemporary architectural exterior with concrete finishes" />
            <div className="image-note"><span>01 / MATERIAL MATTERS</span><strong>Form follows<br />function.</strong></div>
          </div>
        </div>
        <div className="col-lg-6 about-copy reveal">
          <SectionHead kicker="WHO WE ARE" title={<>Built on strength.<br /><em>Designed for excellence.</em></>} />
          <p className="body-lead">At Stonegrid Concrete, we believe concrete can do more than define a boundary. It can shape the character of a place.</p>
          <p>We bring together practical precast solutions and considered design for modern spaces. From compound walls to decorative breeze blocks, our product range is created to support a variety of architectural and construction needs.</p>
          <a className="arrow-link" href="#products">Discover our solutions <i className="bi bi-arrow-up-right" /></a>
          <div className="about-stats">
            <div><strong>PRECAST</strong><span>Product focus</span></div>
            <div><strong>DESIGN</strong><span>Architecture-led</span></div>
            <div><strong>QUALITY</strong><span>Material-minded</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

export function Products() {
  return <section className="section-pad products-section" id="products">
    <div className="container">
      <div className="d-flex justify-content-between align-items-end flex-wrap gap-4 mb-5">
        <SectionHead kicker="OUR PRODUCT RANGE" title={<>Concrete, with<br /><em>more possibility.</em></>} text="Explore practical precast systems and architectural elements for the spaces you imagine." />
        <a className="arrow-link mb-2" href="#contact">Discuss your project <i className="bi bi-arrow-up-right" /></a>
      </div>
      <div className="row g-4">
        {products.map((p, i) => <div className="col-md-6 col-lg-4 reveal" style={{transitionDelay: `${i*70}ms`}} key={p.number}>
          <article className="product-card">
            <div className="product-image"><img src={p.image} alt={p.title} loading="lazy" /><span className="product-number">{p.number}</span><span className="product-arrow"><i className="bi bi-arrow-up-right" /></span></div>
            <div className="product-info"><span className="product-tag">{p.tag}</span><h3>{p.title}</h3><p>{p.description}</p><a href="#contact">Enquire about this <i className="bi bi-arrow-right" /></a></div>
          </article>
        </div>)}
      </div>
    </div>
  </section>;
}

export function WhyChoose() {
  const items = [
    ['bi-shield-check', 'Durability in focus', 'Concrete solutions selected with long-term use and dependable performance in mind.'],
    ['bi-bezier2', 'Design versatility', 'A range of forms and finishes to complement different architectural directions.'],
    ['bi-box-seam', 'Precast practicality', 'Explore modular product options that can support more organised project planning.'],
    ['bi-chat-square-text', 'Project-led approach', 'Start with your requirements and identify the products that best fit your application.']
  ];
  return <section className="why-section section-pad">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-5"><SectionHead kicker="THE STONEGRID APPROACH" title={<>Made for the<br /><em>details that matter.</em></>} text="A considered approach to materials, function and the finished space." /></div>
        <div className="col-lg-7"><div className="feature-grid">{items.map(([icon,title,desc],i)=><div className="feature-item reveal" key={title}><span className="feature-icon"><i className={`bi ${icon}`} /></span><span className="feature-count">0{i+1}</span><h3>{title}</h3><p>{desc}</p></div>)}</div></div>
      </div>
    </div>
  </section>;
}

export function Gallery() {
  const [active, setActive] = useState(null);
  return <section className="section-pad gallery-section" id="gallery">
    <div className="container">
      <SectionHead kicker="VISUAL INSPIRATION" title={<>A closer look at<br /><em>concrete character.</em></>} text="A visual direction for the kinds of architectural applications Stonegrid products can complement." />
      <div className="gallery-grid">
        {gallery.map((g,i)=><button className={`gallery-tile gallery-tile-${i+1} reveal`} key={g.title} onClick={()=>setActive(g)} aria-label={`View ${g.title}`}>
          <img src={g.image} alt={g.title} loading="lazy" /><span className="gallery-caption"><small>{g.category}</small><strong>{g.title}</strong></span><i className="bi bi-plus-lg gallery-plus" />
        </button>)}
      </div>
    </div>
    {active && <div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setActive(null)}><button className="lightbox-close" aria-label="Close image"><i className="bi bi-x-lg" /></button><img src={active.image} alt={active.title} /><div><small>{active.category}</small><strong>{active.title}</strong></div></div>}
  </section>;
}

export function Projects() {
  return <section className="projects-section">
    <div className="container-fluid px-0">
      <div className="row g-0 align-items-stretch">
        <div className="col-lg-6 project-visual"><img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85" alt="Contemporary residential architecture" loading="lazy" /><span>ARCHITECTURAL APPLICATIONS / INSPIRATION</span></div>
        <div className="col-lg-6 project-copy"><div className="project-copy-inner reveal"><span className="eyebrow eyebrow-light"><span /> POSSIBILITIES IN PRECAST</span><h2>Concrete solutions.<br /><em>Real possibilities.</em></h2><p>From clearly defined boundaries to distinctive architectural screens, the right concrete element can bring structure and identity to a space.</p><p className="small-note">The imagery on this demo represents illustrative applications, not verified Stonegrid project photographs.</p><a className="btn-primary-custom" href="#contact">Start a conversation <i className="bi bi-arrow-up-right" /></a></div></div>
      </div>
    </div>
  </section>;
}

export function Process() {
  const steps = [
    ['01','Understand your requirements','Tell us about your site, application, dimensions and design preferences.'],
    ['02','Product selection','Explore suitable product types, styles and possible configurations.'],
    ['03','Manufacturing discussion','Discuss specifications, finish expectations and project requirements with the team.'],
    ['04','Delivery & project support','Coordinate the next steps, timelines and delivery details directly with the business.']
  ];
  return <section className="section-pad process-section" id="process"><div className="container">
    <SectionHead kicker="HOW WE WORK" title={<>A clear path from brief<br /><em>to build.</em></>} text="A straightforward starting point for your concrete requirements." />
    <div className="process-grid">{steps.map(([n,t,d])=><div className="process-step reveal" key={n}><span>{n}</span><div className="process-line" /><h3>{t}</h3><p>{d}</p></div>)}</div>
  </div></section>;
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:'',phone:'',email:'',product:'',message:''});
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => { e.preventDefault(); setSent(true); };
  return <section className="contact-section section-pad" id="contact"><div className="container">
    <div className="row g-5">
      <div className="col-lg-5 contact-intro reveal"><span className="eyebrow eyebrow-light"><span /> GET IN TOUCH</span><h2>Let's build<br />something <em>stronger.</em></h2><p>Have a project in mind? Share a few details and start a conversation about the right concrete solution.</p>
        <div className="contact-detail"><i className="bi bi-telephone" /><div><small>PHONE</small><span>Contact number to be added</span></div></div>
        <div className="contact-detail"><i className="bi bi-envelope" /><div><small>EMAIL</small><span>Email address to be added</span></div></div>
        <div className="contact-detail"><i className="bi bi-geo-alt" /><div><small>LOCATION</small><span>Business address to be added</span></div></div>
      </div>
      <div className="col-lg-7 reveal"><form className="contact-form" onSubmit={submit}>
        <div className="form-heading"><span>01 / PROJECT ENQUIRY</span><p>Fields marked * are required.</p></div>
        {sent ? <div className="form-success"><i className="bi bi-check-circle" /><h3>Thank you for your interest.</h3><p>This is a demo form. No information has been sent. Connect a form service or business email before publishing.</p><button type="button" className="arrow-link" onClick={()=>setSent(false)}>Submit another enquiry <i className="bi bi-arrow-right" /></button></div> :
        <>
          <div className="row g-3"><div className="col-md-6"><label htmlFor="name">Your name *</label><input id="name" name="name" value={form.name} onChange={update} required placeholder="Full name" /></div><div className="col-md-6"><label htmlFor="phone">Phone number *</label><input id="phone" name="phone" value={form.phone} onChange={update} required type="tel" pattern="[0-9+() -]{7,20}" placeholder="+91" /></div><div className="col-md-6"><label htmlFor="email">Email address</label><input id="email" name="email" value={form.email} onChange={update} type="email" placeholder="you@example.com" /></div><div className="col-md-6"><label htmlFor="product">Product interest</label><select id="product" name="product" value={form.product} onChange={update}><option value="">Select a product</option>{products.map(p=><option key={p.number}>{p.title}</option>)}</select></div><div className="col-12"><label htmlFor="message">Tell us about your project *</label><textarea id="message" name="message" value={form.message} onChange={update} required rows="4" placeholder="Share your requirements, location and approximate dimensions..." /></div></div>
          <button className="btn-primary-custom form-submit" type="submit">Send enquiry <i className="bi bi-arrow-up-right" /></button>
          <p className="form-disclaimer">Demo interaction only — connect a backend or form service to receive enquiries.</p>
        </>}
      </form></div>
    </div>
  </div></section>;
}