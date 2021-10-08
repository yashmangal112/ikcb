import { createElement } from 'react';

import * as logos from '@assets/supporters';

const Supporters: React.FC = () => (
  <section cx="sect">
    <div cx="ctr">
      <h1 cx="heading">Supported By</h1>
      <div cx="supporters">
        {Object.entries(logos).map((o) => (
          <div key={o[0]} cx="logo">
            {createElement(o[1], { role: 'img', 'aria-label': o[0] })}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Supporters;
