import { createElement } from 'react';

import * as illustrations from '@assets/illustrations';

const Illustration: React.FC = () => (
  <div cx="slider">
    <div cx="slide-track">
      {['0', '1'].map((i) =>
        Object.entries(illustrations).map((o) =>
          createElement(o[1], { key: o[0] + i, role: 'img', 'aria-label': `Code ${o[0]}` }),
        ),
      )}
    </div>
  </div>
);

export default Illustration;
