import React from "react";

const Cart = ({ selectedItems, setSelectedItems }) => {
  console.log(selectedItems);

  let subTotal = 0;
  const deliveryFees = 2.5;

  for (let i = 0; i < selectedItems.length; i++) {
    subTotal =
      subTotal + Number(selectedItems[i].price) * selectedItems[i].quantity;
    console.log(subTotal);
  }

  let total = subTotal + deliveryFees;

  return (
    <div className="cart">
      <div className="cart-content">
        <button className="cart-button">Valider mon panier</button>
        {/* Pour exploiter les données d'un tableau, on utilise la fonction .map() */}
        {selectedItems.map((selectedItem, index) => {
          console.log(selectedItem);
          return (
            <div>
              <div className="cart-items">
                <div className="cart-quantity">
                  <button
                    onClick={() => {
                      // je veux modififer l'état selectItems
                      // 1 - je copie mon état
                      const newItems = [...selectedItems];
                      // 2 - je modifie la copie
                      if (newItems[index].quantity === 1) {
                        newItems.splice(index, 1);
                      } else {
                        newItems[index].quantity--;
                      }
                      // 3 - je mets à jour mon state
                      setSelectedItems(newItems);
                    }}
                  >
                    -
                  </button>
                  <span>{selectedItem.quantity}</span>
                  <button
                    onClick={() => {
                      // je veux modififer l'état selectItems
                      // 1 - je copie mon état
                      const newItems = [...selectedItems];
                      // 2 - je modifie la copie

                      newItems[index].quantity++;

                      // 3 - je mets à jour mon state
                      setSelectedItems(newItems);
                    }}
                  >
                    +
                  </button>
                </div>
                <span>{selectedItem.title}</span>
                <span>{selectedItem.price.replace(".", ",")} €</span>
              </div>
            </div>
          );
        })}
        <div>
          {/* Si panier vide masquer le détail */}
          <hr />
          <div className="cart-subtotal">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span>Subtotal : </span>
              <span> {subTotal.toFixed(2).replace(".", ",")} €</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Frais de livraison : </span>
              <span>{deliveryFees.toFixed(2).replace(".", ",")} €</span>
            </div>
          </div>

          <hr />
          <div className="cart-total">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 20, fontWeight: "bold" }}>Total : </span>
              <span style={{ fontSize: 20, fontWeight: "bold" }}>
                {total.toFixed(2).replace(".", ",")} €
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
