import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton(props) {
  return (
    <ContentLoader
      speed={3}
      width={235}
      height={417}
      viewBox="0 0 235 417"
      backgroundColor="rgba(0,0,0,0.2)"
      foregroundColor="rgba(0,0,0,0.4)"
      {...props}>
      <rect x="0" y="0" rx="10" ry="10" width="235" height="300" />
      <rect x="0" y="310" rx="10" ry="10" width="235" height="18" />
      <rect x="0" y="335" rx="10" ry="10" width="120" height="15" />
      <rect x="0" y="392" rx="10" ry="10" width="81" height="24" />
      <rect x="152" y="392" rx="10" ry="10" width="81" height="24" />
    </ContentLoader>
  );
}

export default Skeleton;
