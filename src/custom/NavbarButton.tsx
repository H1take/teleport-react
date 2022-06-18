import React from "react";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const NavbarButton = styled(Button)`

    display: flex;
    width: 291px;
    height: 56px;
    color: #fff;
    justify-content: flex-start;
    align-items: center;
    font-size: 16;
    text-transform: none;
    border: none;

    :hover {
        border: none;
        background: #0057FF;
    }

    :active {
        background: #0057FF;
        border-radius: 4px; 
        border: none;
    }

    :focus {
        background: #0057FF;
        border-radius: 4px;
        border: none;
    }
`;

export default NavbarButton;
