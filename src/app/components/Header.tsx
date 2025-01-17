import Image from "next/image";
import Link from "next/link";

import '../styles/Header.css';

const Header: React.FC = () => {

	return (
    <header className="header">
      <div className="header__left">
        <Link href={'/'}>
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={180} 
            height={75} 
            priority 
          />
        </Link>
      </div>
      <div className="header__right">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link 
                href={'/'} 
                className="nav__list-link nav__list-link_active"
              >
                Home
              </Link>
            </li>
            <li className="nav__list-item">
              <Link href={'/collection'} className="nav__list-link">Collection</Link>
            </li>
            <li className="nav__list-item">
              <Link href={'/about'} className="nav__list-link">About Us</Link>
            </li>
            <li className="nav__list-item">
              <Link href={'/contacts'} className="nav__list-link">Contacts</Link>
            </li>
          </ul>
          <a aria-label="Wishlist" className="header__list-link header__wishlist-link" href="/wishlist"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="header__list-sup-svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg><sup className="header__list-sup">0</sup></a>
        </nav>
        <select name="header__select" id="header__select">
          <option value="en">ENG</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </header>
	);
}

export default Header;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "../styles/Header.css";

// const Header: React.FC = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <Image src="/logo.png" alt="Logo" width={50} height={50} />
//       </div>
//       <nav className="nav">
//         <ul>
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link href="/services">Services</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;