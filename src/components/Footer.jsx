import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "darkslategray",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Footer() {
  const [footer, setFooter] = useState('');

const handleItemClick = (label) => {
  setFooter(label);
}

return (
  <Box sx={{
    width:'100%',
    justifySelf: "center",
    marginTop: "3%",
  }}
  >
    <Stack
    className="feet"
    spacing={2} 
    sx={{ padding: "2%" }}
    >
      {[
        { label: 'Inicio', to: '/' },
        { label: 'Sitio web oficial', to: import.meta.env.VITE_ORIGINAL_URL, external: true },
        { label: 'Contacto', to: '/contact' },
        { label: 'Blog', to: import.meta.env.VITE_BLOG_URL, external: true },
      ].map((item) => (
        <Item
        key={item.label}
        component={Link}
        to={item.to}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener' : undefined}
        sx={{
          color: footer === item.label ? 'cadetblue' : 'ButtonText',
          cursor: 'pointer'
        }}
        onClick={() => handleItemClick(item.label)}
        >{item.label}</Item>
      ))}
    </Stack>
  </Box>
)
}


