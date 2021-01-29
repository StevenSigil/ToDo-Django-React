import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <p>
          <a href="https://github.com/StevenSigil">Made by Steve</a>
        </p>
        <p>
          <a href="https://github.com/StevenSigil">Copyright ⓒ {year}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
