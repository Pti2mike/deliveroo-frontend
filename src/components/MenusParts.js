import React from "react";
import MenusDetail from "./MenusDetail";

const MenusParts = ({ data, selectedItems, setSelectedItems }) => {
  return (
    data.meals.length > 0 && (
      <div className="menusplit">
        <h2>{data.name}</h2>
        <div className="menusPart">
          {data.meals.map((item, index) => {
            return (
              <MenusDetail
                key={item.id}
                data={item}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default MenusParts;
