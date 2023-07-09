import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="menu">
      <form>
        <label htmlFor="Language">Select Language: </label>
        <select>
          <option value="Marathi">Marathi</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </form>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <div
            key={key}
            onClick={() => handleCardClick(menuItem.url)}
            style={{ cursor: "pointer" }}
          >
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              url={menuItem.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
