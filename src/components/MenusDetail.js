import React from "react";

const MenusDetail = ({ data, selectedItems, setSelectedItems }) => {
  return (
    <div
      className="menusDetail"
      onClick={() => {
        const newItems = [...selectedItems];

        // est-ce que le produit existe déjà dans le panier?
        let isItemFound = false;
        for (let i = 0; i < newItems.length; i++) {
          //  on utilise l'id d'un item qui est une donnée unique
          if (newItems[i].id === data.id) {
            // si le produit est déjà dans le panier alors on modifie la quantité
            newItems[i].quantity++;
            isItemFound = true;
          }
        }

        if (isItemFound === false) {
          newItems.push({
            title: data.title,
            quantity: 1,
            price: data.price,
            id: data.id,
          });
        }

        setSelectedItems(newItems);
      }}
    >
      <div className="menu-card">
        <h3>{data.title}</h3>
        <p className="description">
          {data.description && data.description.slice(0, 60) + "..."}
        </p>
        <div className="menusinfo">
          <p style={{ marginRight: 20, fontSize: 17 }}>
            {data.price.replace(".", ",")} €
          </p>
          {data.popular && "* Populaire"}
        </div>
      </div>
      {data.picture && (
        <img className="img-menusDetail" src={data.picture} alt={data.title} />
      )}
    </div>
  );
};

export default MenusDetail;
