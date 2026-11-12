import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { About, Products, WhyChoose, Gallery, Projects, Process, Contact } from './components/Sections';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const nav = document.querySelector('.site-nav');
    const onScroll = () => nav?.classList.toggle('nav-scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return <>
    <Navbar />
    <main><Hero /><About /><Products /><WhyChoose /><Gallery /><Projects /><Process /><Contact /></main>
    <Footer />
    <a className="back-top" href="#home" aria-label="Back to top"><i className="bi bi-arrow-up" /></a>
  </>;
}