import type { IconType } from 'react-icons';

import { SiDiscord, SiGithub, SiInstagram, SiMedium, SiYoutube } from 'react-icons/si';

import Logo from '@assets/logo.svg';

const IconWrapper: React.FC<{ icon: string; children: IconType }> = ({ icon, children }) => (
  <a
    aria-label={icon}
    cx="wrapper"
    href={`/${icon.toLowerCase()}`}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children({ title: icon })}
  </a>
);

const Footer: React.FC = () => (
  <footer cx="footer">
    <div cx="ctr">
      <button
        type="button"
        onClick={(): void => {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <Logo aria-label="IIIT Kota CodeBase" height="40" role="img" />
      </button>
      <p cx="copyright">© 2021 IIIT Kota CodeBase</p>
      <span cx="icons">
        <IconWrapper icon="Discord">{SiDiscord}</IconWrapper>
        <IconWrapper icon="GitHub">{SiGithub}</IconWrapper>
        <IconWrapper icon="Instagram">{SiInstagram}</IconWrapper>
        <IconWrapper icon="Medium">{SiMedium}</IconWrapper>
        <IconWrapper icon="YouTube">{SiYoutube}</IconWrapper>
      </span>
    </div>
  </footer>
);

export default Footer;
