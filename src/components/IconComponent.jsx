import React from 'react';

const IconComponent = ({ pathValue }) => {
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <path class="fil0" d={pathValue} />
    </svg>
  );
};

export default IconComponent;
