import React from "react";
// import { Link } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`https://api.example.com/items/${id}`);
      const data = await response.json();
      // Handle the API response data
      console.log(data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
    <div className="menu">
      <form>
        <label htmlFor="Subject" placeholder="Subject">Select Subject: </label>
        <select>
          <option value="Marathi">Marathi</option>
          <option value="English">English</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
        </select>

        <label htmlFor="Language" placeholder="Language">Select Language: </label>
        <select>
          <option value="Marathi">Marathi</option>
          <option value="English">English</option>
          <option value="Physics">Hindi</option>
        </select>
      </form>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div
              key={key}
              onClick={() => handleCardClick(menuItem.id)}
              style={{ cursor: "pointer" }}
            >
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
