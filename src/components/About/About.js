import React, { useContext } from "react";

import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import { Box } from "@material-ui/core";
import Terminal from "./Terminal";
import { headerData } from "../../data/headerData";
import { Style } from "@material-ui/icons";

function About() {
  const { theme } = useContext(ThemeContext);
  const firstName = headerData.firstname.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: aboutData.baseColor }}>{firstName}</span> cat
          about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: aboutData.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {aboutData.description2}
        </p>
      </>
    );
  }
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"3rem"}
            style={{ backgroundColor: theme.secondary }}
          >
            <Terminal text={aboutMeText()} />
          </Box>
        </div>
        <div className="about-img">
          <img
            src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
