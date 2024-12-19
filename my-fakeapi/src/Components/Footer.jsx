import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <p>Made with ♥ by FashionStore</p>
        <p>
          <a
            href="https://www.buymeacoffee.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="coffee-link"
          >
            Buy me a coffee ☕
          </a>
        </p>
        <div id="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </a>
        </div>
      </footer>
    );
  }
}



