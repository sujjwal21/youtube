import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

// const selectedCtegory = "New";
const Sidebar = ({selectedCategory,setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((cat) => (
      <button
        className="category-btn"
        onClick={()=>setSelectedCategory(cat.name)}
        style={{
          background: cat.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={cat.name}
      >
        <span
          style={{
            color: cat.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {cat.icon}
        </span>
        <span style={{ opacity: cat.name === selectedCategory ? "1" : "0.7" }}>
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
