import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import angular from "../assets/svg/skills/angular.svg";
import android from "../assets/svg/skills/android.svg";

import javascript from "../assets/svg/skills/javascript.svg";
import react from "../assets/svg/skills/react.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import c from "../assets/svg/skills/c.svg";
import csharp from "../assets/svg/skills/csharp.svg";
import java from "../assets/svg/skills/java.svg";
import python from "../assets/svg/skills/python.svg";
import git from "../assets/svg/skills/git.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "angular":
      return angular;
    case "android":
      return android;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;

    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;

    case "c":
      return c;

    case "c#":
      return csharp;

    case "java":
      return java;

    case "python":
      return python;

    case "git":
      return git;

    default:
      break;
  }
};
