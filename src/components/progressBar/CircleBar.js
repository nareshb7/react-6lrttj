import React from 'react';

const CircleBar = () => {
  return (
    <div>
      <h2 style={{ color: '#f0f' }}>CircleBar : </h2>
      <div>
        <div
          style={{
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            backgroundColor: '#00f',
          }}
        >
          <div
            style={{
              borderRadius: '50%',
              width: '180px',
              height: '180px',
              backgroundColor: '#0ff',
              margin: '10px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default CircleBar;
