import GraphQLIcon from "../icons/graphql-icon.svg";
import PostgreSQLIcon from "../icons/postgresql.svg";
import ApolloIcon from "../icons/apollo-icon.svg";
import ReactJSIcon from "../icons/react-icon.svg";
import tw from "tailwind-styled-components";
import {Link} from "../components";

import locale from "../locale";

const Icon = tw.img`h-10 w-10`;

const ClientItem = (props: {title: string; description: string; url: string;}) => (
    <div className="w-1/3 mb-6">
    <div className="h-full flex flex-col items-center mx-8 text-center text-justify">
        <div className="flex">
        <Icon src={ReactJSIcon} alt="ReactJS Icon" />
        <Icon src={ApolloIcon} alt="Apollo Icon" />
        </div>
        <strong className="font-bold text-xl m-2">{props.title}:</strong> {props.description}
    </div>
    <Link href={props.url} target="_blank" rel="noreferrer">{locale.getString("project.code")} Github</Link>
    </div>
); 

const Subsection = (props: {title: string; description: string; children?: any}) => (
    <div className="w-full">
        <h3 className="text-4xl font-bold text-center font-cabinet">{props.title}</h3>
        <p className="text-center">{props.description}</p>
        {props.children}
    </div>);

const Card = tw.div`rounded p-4 my-4 flex flex-row justify-around bg-white drop-shadow-md`;

function ProjectsSection() {
    return (
        <section className="m-28 text-center">
            <h2 className="text-5xl font-bold font-cabinet">{locale.getString("project.title")}</h2>
            <h3 className="text-2xl">{locale.getString("project.subtitle")}</h3>
            <p>({locale.getString("project.since")} 2019)</p>
            <p className="text-justify font-roboto">{locale.getString("project.paragraph")}</p>
            <Subsection title={locale.getString("project.stack.backend.title")} description={locale.getString("project.stack.backend.description")}>
                <p className="text-center"><Link rel="noreferrer" href="https://github.com/grochadc/filex-graphql-server" target="_blank">{locale.getString("project.code")} Github</Link></p>
                <Card>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex py-2"><Icon src={ApolloIcon} alt="Apollo Icon" />
                        <Icon src={GraphQLIcon} alt="Graphql Icon" />
                        </div>
                        {locale.getString("project.stack.backend.server")}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Icon src={PostgreSQLIcon}  alt="PostgreSQL Icon" />
                        {locale.getString("project.stack.backend.db")}
                    </div>
                </Card>
            </Subsection>
                <Subsection title={locale.getString("project.stack.frontend.title")} description={locale.getString("project.stack.frontend.description")}>
                <Card>
                    <ClientItem url="https://github.com/grochadc/filex-placement-test-2" title={locale.getString("project.stack.frontend.items.test.title")} description={locale.getString("project.stack.frontend.items.test.description")} />
                    <ClientItem url="https://github.com/grochadc/filex-registro" title={locale.getString("project.stack.frontend.items.registration.title")} description={locale.getString("project.stack.frontend.items.registration.description")} />
                    <ClientItem url="https://github.com/grochadc/filex-workshops-registration" title={locale.getString("project.stack.frontend.items.workshops.title")} description={locale.getString("project.stack.frontend.items.workshops.description")} />
                </Card>
                </Subsection>
        </section>)
};

export default ProjectsSection;