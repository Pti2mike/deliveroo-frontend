import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menus from "./components/Menus";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Va gérer le fait que l'objet soit vide au chargement du composant
  const [selectedItems, setSelectedItems] = useState([]); // Va me permettre de modifier l'état du panier

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-v1.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header />

      <Restaurant data={data.restaurant} />

      <Menus
        data={data.categories}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
}

export default App;
