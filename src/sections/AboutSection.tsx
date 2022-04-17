import ProfilePic from "../profile.jpeg";
import TwitterTile from "../icons/twitter-tile.svg";
import GithubTile from "../icons/github-tile.svg";
import GmailTile from "../icons/gmail.svg";
import WhatsappIcon from "../icons/whatsapp.svg";
import MexicoFlag from "../icons/Flag_of_Mexico.svg";
import USFlag from "../icons/Flag_of_the_United_States.svg"
import {Link} from "../components";

const ContactLlinks: ListItem[] = [
    {name: "github", icon: GithubTile, href:"https://github.com/grochadc", children: ['grochadc']},
    {name:"twitter", icon: TwitterTile, href:"https://twitter.com/medicengonzo", children: ['@medicengonzo']},
    {name: "gmail", icon: GmailTile, href:"mailto:grochadc@gmail.com", children: ['grochadc@gmail.com']},
    {name: "telefono", icon: WhatsappIcon, href:"+523121710536", children: ['+52 312 171 0536']}
]

type ListItem = {name: string; icon: string; href: string; children?: any;}
const ContactInfo = (props: {list: ListItem[]}) => {
    return (<ul className="my-2 flex justify-around">
        {props.list.map((listItem, index) => <li className="flex">
            <img className="h-6 mr-2" src={listItem.icon} alt={`${listItem.name} icon`} /><Link href={listItem.href}>{listItem.children}</Link>
        </li>)}
    </ul>)
}

const Flag = (props: {src: any}) => {
    return (<><img src={props.src} alt="" className="h-3 ml-1" /></>)
}

const Header = () => (
    <header className='bg-fogra h-1/3vh flex justify-between p-12'>
        <div>
            <h1 className="text-7xl font-bold text-white font-montserrat">Gonzalo Rocha</h1>
            <p className='text-white text-xl relative left-3 top-2'>React | Typescript | GraphQL</p>
        </div>
        <img  className="rounded-full h-72" src={ProfilePic} alt="Foto de Perfil" />
    </header>
);
const About = () => (
    <section className="flex flex-row justify-around">
        <div className="w-3/5 ml-0 mt-12">
            <h2 className="text-4xl font-bold mb-2">Acerca de Mí</h2>
            <p>Mi nombre es Gonzalo Rocha. Estudié la licenciatura en Ciencias de la Comunicación pero me ha apasionado las tecnologías web desde mi adolescencia.
            Desde 2011 he aprendido de forma autodidacta diferentes tecnologías para el desarrollo y diseño web y he mantenido diversos proyectos personales.</p>
            <ContactInfo list={ContactLlinks} />
        </div>
        <div className="text-center relative top-36 w-48 right-2">
            <div className="flex items-center">Mexicano<Flag src={MexicoFlag} /></div>
            <div className="flex items-center">Español<Flag src={MexicoFlag} />, Inglés<Flag src={USFlag} /></div>
            <p>🎥 📕 💻</p>
        </div>
  </section>
);

function HeaderAndAbout() {
    return (<>
        <Header />
        <About />
    </>);
}

export default HeaderAndAbout;