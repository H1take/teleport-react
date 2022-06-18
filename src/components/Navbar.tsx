import React from "react";

import NavbarButton from "../custom/NavbarButton";

import { ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import DeblurIcon from "@mui/icons-material/Deblur";
import PeopleIcon from "@mui/icons-material/People";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";

import theme from "../theme";
import "./Navbar.css";

const Navbar = (): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <div className="navbar">
        <h1>Teleport</h1>
        <div className="buttonGroup">
          <NavbarButton variant="outlined" startIcon={<InsertDriveFileIcon />}>
            Мои страницы
          </NavbarButton>
          <NavbarButton variant="outlined" startIcon={<CurrencyRubleIcon />}>
            Баланс
            <div className="balance"><p>50,00 ₽</p></div>
          </NavbarButton>
          <NavbarButton variant="outlined" startIcon={<DeblurIcon />}>
            Домены
          </NavbarButton>
          <NavbarButton variant="outlined" startIcon={<PeopleIcon />}>
            Партнерская программа
          </NavbarButton>
          <NavbarButton variant="outlined" startIcon={<LibraryBooksIcon />}>
            Обучающие материалы
          </NavbarButton>
          <NavbarButton variant="outlined" startIcon={<SettingsIcon />}>
            Настройки
          </NavbarButton>
          <div className="buttonGroupSettings">
            <NavbarButton variant="outlined" startIcon={<LogoutIcon />}>
              Выход
            </NavbarButton>
            <div className="themeSet">
              <LightModeIcon />
              <p>Светлая тема</p>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
