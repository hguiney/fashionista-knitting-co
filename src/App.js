import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header center-contents-bidirectionally">
        <a className="header__menu-toggle center-contents-bidirectionally" href="#">
          <img className="icon icon--hamburger" src="/img/bars-solid.svg" width="21" height="24" alt="☰" />
        </a>
        <hgroup className="header__branding">
          <h1 className="h header__brand-name">Fashionista Knitting Co.</h1>
          <h2 className="h header__tagline">Fashionably knit</h2>
        </hgroup>
        <a className="header__menu-toggle center-contents-bidirectionally" href="#">
          <img className="icon icon--shopping-cart" src="/img/shopping-cart-solid.svg" width="27" height="24" alt="shopping cart" />
        </a>
      </header>
      <div className="hero center-contents-bidirectionally">
        <h2 className="h hero__heading">New Arrivals</h2>
        <a className="cta hero__cta" href="#">Shop</a>
      </div>
      <nav className="breathe category-navigation">
        <h2 className="h category-navigation__heading">Shop by</h2>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="category-link__heading">Yarn</h3>
        </a>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="h category-link__heading">Fiber</h3>
        </a>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="h category-link__heading">Patterns</h3>
        </a>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="h category-link__heading">Needles</h3>
        </a>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="h category-link__heading">Notions</h3>
        </a>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="h category-link__heading">Buttons</h3>
        </a>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="h category-link__heading">Shawl Pins</h3>
        </a>
        <a className="category-link center-contents-bidirectionally" href="#">
          <h3 className="h category-link__heading">Cashmere</h3>
        </a>
      </nav>
      <footer className="breathe">
        <div className="columns">
          <section className="columns__column newsletter-signup">
            <h2 className="h">Follow Us</h2>
            <form className="newsletter-signup__form" onSubmit={ e => e.preventDefault() }>
              <label className="newsletter-signup__label" for="newsletter-signup-email">Sign-up for Our Newsletter:</label>
              <input id="newsletter-signup-email" className="newsletter-signup__input center-self-vertically" type="email" placeholder="me@example.com" />
              <button className="cta newsletter-signup__submit center-self-vertically">OK</button>
            </form>
            <p className="social-media">
              <a className="social-media__link" href="#">Twitter</a> · <a className="social-media__link" href="#">Facebook</a> · <a className="social-media__link" href="#">Instagram</a>
            </p>
          </section>
          <section className="columns__column">
            <h2 className="h">Help</h2>
            <ul>
              <li><a href="#">Log In / Sign Up</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Returns &amp; Exchanges</a></li>
            </ul>
          </section>
        </div>
        <div className="breathe copyright center-contents-bidirectionally">
          <p>© {new Date().getFullYear()} Fashionista Knitting Co. All rights reserved.</p>
          {/* <p>Icons © Fonticons, Inc. Used under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></p> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
