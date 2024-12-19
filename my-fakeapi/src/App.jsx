import React,{Component} from "react";
import Navbar from './Components/Navbar';
import About from "./Components/About";
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import "./Style.css";
export default class App extends Component {
    render() {
        return (
             <>
              <Navbar/>
              <About/>
              <Cards/>
              <Footer/>
             </>
        )
    }
}