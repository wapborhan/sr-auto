import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © SR Autos &amp; Developed by{" "}
          <a href="http://srdreamlab.com/" target="_blank" rel="noreferrer">
            SR Dream Lab
          </a>{" "}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
