import React from "react";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CreatePageHomeButton = styled(Button)`
  display: flex;
  width: 234px;
  height: 46px;
  color: #fff;
  border: none;
  background: #FD3162;
  justify-content: center;
  align-items: center;
  font-size: 16;
  text-transform: none;

  :hover {
    border: none;
    background: #FD3162;
  }

  :active {
    background: #FD3162;
    border-radius: 4px;
    border: none;
  }

  :focus {
    background: #FD3162;
    border-radius: 4px;
    border: none;
  }
`;

export default CreatePageHomeButton;
