import React, { useState, useEffect } from "react";
import api from "./services/api";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.get(`/characters`);

      console.log(response.data);

      setItems(response.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
