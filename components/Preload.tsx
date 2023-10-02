const Preload: React.FC<{ font: string }> = ({ font }) => (
  <a
    as="font"
    crossOrigin="anonymous"
    href={`/fonts/${font}.woff2`}
    rel="preload"
    type="font/woff2"
  />
);

export default Preload;
