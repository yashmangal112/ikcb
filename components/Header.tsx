
import Logo from '@assets/logo.svg';
import Link from 'next/link';

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
          About Us
        </Link>
        <Link href="#our-team">
          Our Team
        </Link>
        <Link href="#contact-us">
          Contact Us
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
