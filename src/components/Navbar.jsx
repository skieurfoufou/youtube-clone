import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "purple",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <YouTubeIcon
          style={{
            color: "red",
            fontSize: "4rem",
          }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
