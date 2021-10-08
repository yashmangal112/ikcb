import type { NextPage } from 'next';

import Head from 'next/head';

import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Preload from '@components/Preload';
import Supporters from '@components/Supporters';
import Team from '@components/Team';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>IIIT Kota CodeBase</title>
      <meta
        content="IIIT Kota CodeBase is a community of open source enthusiasts from IIIT Kota who actively work together to build awesome free and open source projects."
        name="description"
      />

      <Preload font="ubuntu-latin-300-normal" />
      <Preload font="ubuntu-latin-400-normal" />
      <Preload font="quicksand-latin-variable-wghtOnly-normal" />
    </Head>
    <Header />
    <Hero />
    <About />
    <Supporters />
    <Team />
    <Contact />
    <Footer />
  </>
);

export default IndexPage;
