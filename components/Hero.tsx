import Link from 'next/link';

import OpenSource from '@assets/open_source.svg';

const Hero: React.FC = () => (
  <section cx="sect">
    <div cx="ctr">
      <div cx="wrapper-left">
        <h1 cx="title">
          IIIT Kota <br />
          CodeBase
        </h1>
        <p cx="desc">
          The Free and Open Source <br />
          Society of IIIT&nbsp;Kota
        </p>
        <div cx="btn-wrapper">
          <Link href="#about-us">
            <a cx="btn-primary">Discover More</a>
          </Link>
          <Link href="#contact-us">
            <a cx="btn-secondary">Join the Team</a>
          </Link>
        </div>
      </div>
      <div cx="wrapper-right">
        <OpenSource role="presentation" />
      </div>
    </div>
  </section>
);

export default Hero;
