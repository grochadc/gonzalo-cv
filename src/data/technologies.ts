import JavascriptIcon from "../icons/javascript.svg";
import GraphqlIcon from "../icons/graphql-icon.svg";
import NodeJSIcon from "../icons/nodejs-icon.svg";
import GituhbIcon from "../icons/github.svg";
import ReactJSIcon from "../icons/react-icon.svg";
import JestIcon from "../icons/jest-icon.svg";
import TypescriptIcon from "../icons/typescript-icon.svg";
import TailwindIcon from "../icons/tailwind-css-icon.svg";
import PostgreSQLIcon from "../icons/postgresql.svg"

type Technology = {
    name: string;
    since: string;
    icon: any;
}

const data: Technology[] = [
    {name: "Javascript", since: "2011", icon: JavascriptIcon},
    {name: "NodeJS", since: "2017", icon: NodeJSIcon},
    {name: "Git + Github", since: "2017", icon: GituhbIcon},
    {name: "ReactJS", since: "2018", icon: ReactJSIcon},
    {name: "Testing (Jest + react-testing-library)", since: "2019", icon: JestIcon },
    {name: "GraphQL (Client + Server)", since: "2020", icon: GraphqlIcon},
    {name: "Typescript", since: "2021", icon: TypescriptIcon},
    {name: "PostgreSQL", since: "2021", icon: PostgreSQLIcon},
    {name: "TailwindCSS", since: "2021", icon: TailwindIcon},
]
export default data;