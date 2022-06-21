import React from "react";

import CreatePageHomeButton from "../../../custom/CreatePageHomeButton";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "./CreatePageHome.css";

const CreatePageHome = () => {
  return (
    <div className="createPageHome">
      <div className="createPageHomeTitle">
        <h1>Получи 15 материалов бесплатно</h1>
        <p>Всего 12 страниц</p>
      </div>
      <div className="createPageHomeButton">
        <CreatePageHomeButton variant="outlined" startIcon={<AddBoxIcon />}>
          Создать папку
        </CreatePageHomeButton>
      </div>
    </div>
  );
};

export default CreatePageHome;
