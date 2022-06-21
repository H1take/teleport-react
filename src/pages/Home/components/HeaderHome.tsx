import React from "react";

import HeaderHomeButton from "../../../custom/HeaderHomeButton";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "./HeaderHome.css";

const HeaderHome = () => {
  return (
    <div className="headerHome">
      <div className="headerHomeTitle">
        <h1>Папки</h1>
        <p>Всего 6 папок</p>
      </div>
      <div className="headerHomeButton">
        <HeaderHomeButton variant="outlined" startIcon={<AddBoxIcon />}>
          Создать папку
        </HeaderHomeButton>
      </div>
    </div>
  );
};

export default HeaderHome;
