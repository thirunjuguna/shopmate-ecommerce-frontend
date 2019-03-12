import React from 'react';
import ContentLoader from 'react-content-loader';

export const ProductCardLoader = () => (
  <ContentLoader height={500}>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="700px" />
  </ContentLoader>
);
