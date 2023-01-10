import React, { useContext } from "react";
import { Box } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Terminal.module.css";
import CloseIcon from "@material-ui/icons/FiberManualRecord";

function Terminal(props) {
  const { text } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <Box component={"section"} borderRadius={"0.5rem"} mb={"4rem"}>
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
      >
        <div>
          {" "}
          <CloseIcon style={{ color: "#ff6057" }} />
          <CloseIcon style={{ color: "#ffbd2e" }} />
          <CloseIcon style={{ color: "#27c93f" }} />
        </div>
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        className="terminal"
        fontFamily={"Courier New, Courier, monospace"}
      >
        {" "}
        <i className="fa fa-circle" style={{ color: "green" }} />
        <p style={{ color: theme.tertiary80 }}> {text}</p>
      </Box>
    </Box>
  );
}

export default Terminal;
