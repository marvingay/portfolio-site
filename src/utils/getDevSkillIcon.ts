import { DevSkill } from "../types"
import TypeScriptIcon from "../images/icons8-typescript-48.png"
import JavaScriptIcon from "../images/icons8-javascript-48.png"
import HtmlIcon from "../images/icons8-html-5-48.png"
import CssIcon from "../images/icons8-css3-48.png"
import GitIcon from "../images/icons8-git-48.png"
import DockerIcon from "../images/icons8-docker-48.png"
import LinuxIcon from "../images/icons8-linux-48.png"
import SassIcon from "../images/icons8-sass-avatar-48.png"
import GraphQLIcon from "../images/icons8-graphql-48.png"
import MongoDBIcon from "../images/icons8-mongodb-48.png"
import PostgreSQLIcon from "../images/icons8-postgresql-48.png"
import CppIcon from "../images/icons8-cpp-48.png"
import NodeJSIcon from "../images/icons8-nodejs-48.png"
import ReactIcon from "../images/icons8-react-64.png"
import MaterialuiIcon from "../images/icons8-material-ui-48.png"

export const getDevSkillIcon = (skill: DevSkill) => {
  switch (skill) {
    case "TypeScript":
      return TypeScriptIcon
    case "JavaScript":
      return JavaScriptIcon
    case "HTML":
      return HtmlIcon
    case "CSS":
      return CssIcon
    case "Git":
      return GitIcon
    case "Docker":
      return DockerIcon
    case "Linux":
      return LinuxIcon
    case "GraphQL":
      return GraphQLIcon
    case "SASS":
      return SassIcon
    case "MongoDB":
      return MongoDBIcon
    case "PostgreSQL":
      return PostgreSQLIcon
    case "C++":
      return CppIcon
    case "NodeJS":
      return NodeJSIcon
    case "React":
      return ReactIcon
    case "Material-UI":
      return MaterialuiIcon
    default:
      return "error"
  }
}
