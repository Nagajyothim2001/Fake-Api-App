import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="about-text">
            <p>
              FakeStoreApi is a free online REST API that you can use whenever you
              need pseudo-real data for your e-commerce or shopping website
              without running any server-side code. It's awesome for teaching
              purposes, sample codes, tests, etc.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://burst.shopifycdn.com/photos/woman-shopping-for-clothes.jpg?width=1000&format=pjpg&exif=0&iptc=0"
              alt="Shop Image"
            />
          </div>
        </div>
      </>
    );
  }
}

