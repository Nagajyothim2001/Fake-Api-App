import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <ul>
          <li className="logo">
            <img
              src="https://fakestoreapi.com/icons/logo.png"
              alt="FashionStore Logo"
            />
            <h1>FashionStore</h1>
          </li>
          <li className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/category">Category</a>
          </li>
          <li className="search-bar">
            <input
              type="text"
              placeholder="Search Products"
              value={this.props.searchTerm}
              onChange={this.props.handleSearch}
            />
            {/* <button onClick={this.props.searchProducts}>Search</button> */}
          </li>
        </ul>
      </div>
    );
  }
}
