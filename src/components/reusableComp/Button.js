import React from 'react';

const Button = ({ title, func, color, bgcolor }) => {
  return (
    <div>
      <button
        style={{ color: color, backgroundColor: `${bgcolor}`, margin: '10px', padding:'10px 15px', border:'none', borderRadius:'8px' }}
        onClick={func}
      >
        {title}{' '}
      </button>
    </div>
  );
};
export default Button;
