import React from "react";
import MenusParts from "./MenusParts";
import Cart from "./Cart";

const Menus = ({ data, selectedItems, setSelectedItems }) => {
  return (
    <div className="container">
      <div className="wrapper-2">
        <div className="menu-info">
          {data.map((category, index) => {
            return (
              <MenusParts
                key={index}
                data={category}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            );
          })}
        </div>
        <Cart
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
    </div>
  );
};

export default Menus;
