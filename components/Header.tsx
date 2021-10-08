import Link from 'next/link';

import Logo from '@assets/logo.svg';

const Header: React.FC = () => (
  <header cx="header">
    <div cx="ctr">
      <button
        cx="logo-wrapper"
        type="button"
        onClick={(): void => {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <Logo aria-label="IIIT Kota CodeBase" cx="logo" role="img" />
        <span cx="logo-name">
          IIIT Kota
          <br />
          CodeBase
        </span>
      </button>

      <nav cx="nav">
        <Link href="#about-us">
          <a cx="nav-link">About Us</a>
        </Link>
        <Link href="#our-team">
          <a cx="nav-link">Our Team</a>
        </Link>
        <Link href="#contact-us">
          <a cx="nav-link">Contact Us</a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
