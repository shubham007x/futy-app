import React, { useState } from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app-container">
      <Header setQuery={setQuery} />
    
      <MainContent query={query} />
      <Footer />
    </div>
  );
}

export default App;
