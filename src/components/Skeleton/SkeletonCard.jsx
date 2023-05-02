import React from 'react';
import ContentLoader from 'react-content-loader';

function SkeletonCard(props) {
  return (
    <ContentLoader 
    speed={3}
    width={950}
    height={430}
    viewBox="0 0 950 430"
    backgroundColor="rgba(0,0,0,0.2)"
    foregroundColor="rgba(0,0,0,0.4)"
    {...props}
  >
    <rect x="27" y="33" rx="10" ry="10" width="380" height="380" /> 
    <rect x="537" y="33" rx="10" ry="10" width="227" height="29" /> 
    <rect x="537" y="87" rx="10" ry="10" width="100" height="30" /> 
    <rect x="537" y="134" rx="10" ry="10" width="130" height="26" /> 
    <rect x="537" y="218" rx="5" ry="5" width="175" height="10" /> 
    <rect x="537" y="329" rx="10" ry="10" width="132" height="38" /> 
    <rect x="416" y="33" rx="10" ry="10" width="91" height="91" /> 
    <rect x="417" y="129" rx="10" ry="10" width="91" height="91" /> 
    <rect x="416" y="225" rx="10" ry="10" width="91" height="91" /> 
    <rect x="416" y="322" rx="10" ry="10" width="91" height="91" /> 
    <rect x="537" y="176" rx="10" ry="10" width="130" height="26" /> 
    <rect x="537" y="235" rx="5" ry="5" width="175" height="10" /> 
    <rect x="537" y="254" rx="5" ry="5" width="175" height="10" /> 
    <rect x="679" y="329" rx="10" ry="10" width="170" height="38" />
  </ContentLoader>
  );
}

export default SkeletonCard;
