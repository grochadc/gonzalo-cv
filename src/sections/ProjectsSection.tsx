import GraphQLIcon from "../icons/graphql-icon.svg";
import PostgreSQLIcon from "../icons/postgresql.svg";
import ApolloIcon from "../icons/apollo-icon.svg";
import ReactJSIcon from "../icons/react-icon.svg";
import tw from "tailwind-styled-components";
import {Link} from "../components";

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
    <Link href={props.url} target="_blank" rel="noreferrer">Codigo en Github</Link>
    </div>
); 

const Subsection = (props: {title: string; description: string; children?: any}) => (
    <div className="w-full">
        <h3 className="text-3xl font-bold text-center">{props.title}</h3>
        <p className="text-center">{props.description}</p>
        {props.children}
    </div>);

const Card = tw.div`border border-black rounded p-4 my-4 flex flex-row justify-around`;

function ProjectsSection() {
    return (
        <section className="m-28 text-center">
            <h2 className="text-4xl font-bold">Proyecto En Curso</h2>
            <h3 className="text-2xl">Plataforma FILEX</h3>
            <p>(desde 2019)</p>
            <p className="text-justify">FILEX (Formacion Integral por Lenguas Extranjeras) es un programa de lenguas ofrecido 
                en el Centro Universitario del Sur, parte de la red de centros regionales de la Universidad de Guadalajara (Mexico).
            Actualmente me dedico a mantener una plataforma FullStack (React + GraphQL + SQL) para las necesidades tecnologicas del programa de lenguas.</p>
            <Subsection title="Backend" description="Servidor en NodeJS que conjunta toda la información de las plataformas en una API GraphQL.">
                <p className="text-center"><Link rel="noreferrer" href="https://github.com/grochadc/filex-graphql-server" target="_blank">Codigo en Github</Link></p>
                <Card>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex py-2"><Icon src={ApolloIcon} alt="Apollo Icon" />
                        <Icon src={GraphQLIcon} alt="Graphql Icon" />
                        </div>
                        Servidor Apollo GraphQL
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Icon src={PostgreSQLIcon}  alt="PostgreSQL Icon" />
                        Base de Datos Postgresql
                    </div>
                </Card>
            </Subsection>
                <Subsection title="Frontend" description="Clientes React (con cliente Apollo GraphQL) para diferentes necesidades especificas.">
                <Card>
                    <ClientItem url="https://github.com/grochadc/filex-placement-test-2" title="Exámen de Ubicación" description="Una plataforma para que los aspirantes completen un examen de opciones multiples autocalificable para luego ser redireccionados a una videollamada para su examen oral con los profesores del programa." />
                    <ClientItem url="https://github.com/grochadc/filex-registro" title="Registro" description="Plataforma para que los aspirantes realicen su registro semestral a algún nivel ofrecido en el programa." />
                    <ClientItem url="https://github.com/grochadc/filex-workshops-registration" title="Talleres" description="Cada semestre se ofrecen talleres de lenguas para los alumnos. Esta plataforma sirve para que los estudiantes puedan hacer reservaciones en los distintos horarios de talleres." />
                </Card>
                </Subsection>
        </section>)
};

export default ProjectsSection;