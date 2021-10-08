import Illustration from '@components/Illustration';

const About: React.FC = () => (
  <section cx="ctr" id="about-us">
    <div cx="wrapper">
      <h2 cx="heading">About Us</h2>
      <div cx="bar" />
      <Illustration />
    </div>
    <p cx="desc">
      IIIT Kota CodeBase is a community formed by the students of IIIT Kota to promote open source
      development in the institute and hence, maintain a good coding culture. We, at CodeBase,
      explore our technical interests, and enhance our practical coding skills by actively working
      together to build awesome free and open source projects.
    </p>
  </section>
);

export default About;
