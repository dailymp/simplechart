import * as React from 'react';
import Link from 'next/link';

const PageAComponent: React.StatelessComponent = () => (
  <div>
    <h1>Page A</h1>
    <Link as="pageB" href="/pageB">
      <a>Page B</a>
    </Link>
    <Link as="mapPage" href="/mapPageContainer">
      <a>Map Page</a>
    </Link>
  </div>
);

export default PageAComponent;