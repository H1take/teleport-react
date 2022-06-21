import React from "react";

import { Container } from "@mui/material";

import HeaderHome from "./components/HeaderHome";
import CreatePageHome from "./components/CreatePageHome";
import SliderHome from "./components/SliderHome";

const Home = () => {
    return(
        <Container sx={{ minWidth: 1480, marginTop: "20px" }} >
            <HeaderHome />
            <SliderHome />
            <CreatePageHome />
        </Container>
    );
};

export default Home;