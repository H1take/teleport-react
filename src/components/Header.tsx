import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import userSvg from "../assets/user.svg";

import "./Header.css";

const Header: React.FC = (): React.ReactElement => {
  const [country, setCountry] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  return (
    <div className="header">
      <div className="selectCountry">
        <div>
          <FormControl sx={{ m: 1, minWidth: 60, minHeight: 40 }}>
            <Select
              value={country}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                minWidth: 100,
                width: 200,
                height: 40,
                border: "1px solid white",
                color: "#fff",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              <MenuItem value="">
                <em>Select Country</em>
              </MenuItem>
              <MenuItem value={"RU"}>RU</MenuItem>
              <MenuItem value={"ENG"}>ENG</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="profile">
        <p>Александр Нистеренко</p>
        <Avatar sx={{ height: 48, width: 48 }} alt="User avatar" src={userSvg} />
      </div>
    </div>
  );
};

export default Header;
