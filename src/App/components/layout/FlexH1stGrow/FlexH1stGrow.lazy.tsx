import React, { lazy, Suspense } from 'react';

const LazyFlexH1stGrow = lazy(() => import('./FlexH1stGrow'));

const FlexH1stGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexH1stGrow {...props} />
  </Suspense>
);

export default FlexH1stGrow;
