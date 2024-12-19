import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      counts: {},
      searchTerm: "",
      filteredProducts: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        let counts = products.reduce((init, prod) => {
          init[prod.id] = 0;
          return init;
        }, {});
        this.setState({ products, filteredProducts: products, counts });
      })
      .catch((err) => console.log(err));
  }

  handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredProducts = this.state.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ searchTerm, filteredProducts });
  };

  increment = (id) => {
    this.setState((prev) => ({
      counts: { ...prev.counts, [id]: prev.counts[id] + 1 },
    }));
  };

  decrement = (id) => {
    this.setState((prev) => ({
      counts: {
        ...prev.counts,
        [id]: Math.max(prev.counts[id] - 1, 0), // Ensure count does not go below 0
      },
    }));
  };

  render() {
    return (
      <>
        <Navbar
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
        <div className="main-card">
          {this.state.filteredProducts.map((x) => (
            <div key={x.id} className="main">
              <div className="productimage">
                <img src={x.image} id="images" alt={x.title} />
                <div className="productdetails">
                  <h3>{x.title}</h3>
                  {/* <p>{x.description}</p> */}
                  <h4>Category: {x.category}</h4>
                  <h4>
                    Price: ${x.price}
                    <br />
                    Rating: {x.rating.rate}⭐ ({x.rating.count})
                  </h4>
                  <div id="button">
                    <button className="add-to-cart">Add to Cart</button>
                    <button
                      onClick={() => this.increment(x.id)}
                      className="b1 increment-btn"
                    >
                      +
                    </button>
                    <h1 id="count">{this.state.counts[x.id]}</h1>
                    <button
                      onClick={() => this.decrement(x.id)}
                      className="b2 decrement-btn"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
