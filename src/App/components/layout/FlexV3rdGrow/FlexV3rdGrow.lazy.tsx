import React, { lazy, Suspense } from 'react';

const LazyFlexV3rdGrow = lazy(() => import('./FlexV3rdGrow'));

const FlexV3rdGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexV3rdGrow {...props} />
  </Suspense>
);

export default FlexV3rdGrow;
