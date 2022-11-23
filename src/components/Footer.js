import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img
          src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          alt="footerImage"
          width="100px"
          style={{ borderRadius: '50%' }}
        />
        <h3>Company Name</h3>
      </div>
      <div>
        <h3> Days</h3>
        <ul>
          <li>Friday</li>
          <li>Saturday</li>
          <li>Sunday</li>
        </ul>
      </div>
      <div>
        <h3> Months</h3>
        <ul>
          <li>January</li>
          <li>February</li>
          <li>March</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
