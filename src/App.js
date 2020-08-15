import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Container fixed height={{ height: "100vh" }}>
        <Header />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
