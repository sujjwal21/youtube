import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

// const selectedCtegory = "New";
const Sidebar = ({selectedCtegory,setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "90%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((cat) => (
      <button
        className="category-btn"
        onClick={()=>setSelectedCategory(cat.name)}
        style={{
          background: cat.name === selectedCtegory && "#FC1503",
          color: "white",
        }}
        key={cat.name}
      >
        <span
          style={{
            color: cat.name === selectedCtegory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {cat.icon}
        </span>
        <span style={{ opacity: cat.name === selectedCtegory ? "1" : "0.7" }}>
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
