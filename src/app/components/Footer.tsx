import Image from 'next/image';
import Link from 'next/link';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__left">
            <Link href="/" aria-label="Company logo">
              <Image src="/logo.png" alt="Logo" width={200} height={60} />
            </Link>
            <p className="footer__left-text">
              Ecological Clean Sleep Products has been producing high-quality cotton fabrics for years.
            </p>
          </div>

          <div className="footer__menu">
            <h2 className="footer__menu-title">Menu</h2>
            <nav aria-label="Footer Navigation">
              <ul className="footer__list">
                <li><Link className="footer__list-link" href="/">Home</Link></li>
                <li><Link className="footer__list-link" href="/collection">Collection</Link></li>
                <li><Link className="footer__list-link" href="/about">About Us</Link></li>
                <li><Link className="footer__list-link" href="/contact">Contacts</Link></li>
              </ul>
            </nav>
          </div>

          <div className="footer__contact">
            <h3 className="footer__contact-title">Contacts</h3>
            <address className="footer__contact-info">
              <p>Bukhara, st. Alpomish 80</p>
              <p>Email: <a href="mailto:sleepnest@gmail.com">sleepnest@gmail.com</a></p>
              <p>Telegram: sleepnest</p>
              <a href="tel:+998940337212">+998 94 033 72 12</a>
            </address>
          </div>

          <div className="footer__right">
            <h4 className="footer__right-title">Subscribe to our email</h4>
            <form className="footer__right-form">
              <input 
                id="email-subscription" 
                className="footer__right-inp" 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit" className="footer__right-btn">Subscribe</button>
            </form>
            <p className="footer__right-text">Stay updated with our latest news.</p>
          </div>
        </div>
      </div>

      <div className="footer__end">
        <div className="container">
          <p>© 2024 Ecological Clean Sleep Products LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
