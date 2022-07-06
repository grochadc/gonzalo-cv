import ProfilePic from "../profile.jpeg";
//import TwitterTile from "../icons/twitter-tile.svg";
import GithubTile from "../icons/github-tile.svg";
import GmailTile from "../icons/gmail.svg";
import WhatsappIcon from "../icons/whatsapp.svg";
import MexicoFlag from "../icons/Flag_of_Mexico.svg";
import USFlag from "../icons/Flag_of_the_United_States.svg"
import {Link} from "../components";

import locale from "../locale";

const ContactLlinks: ListItem[] = [
    {name: "github", icon: GithubTile, href:"https://github.com/grochadc", children: ['grochadc']},
    //{name:"twitter", icon: TwitterTile, href:"https://twitter.com/medicengonzo", children: ['@medicengonzo']},
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
    <header className='bg-fogra md:h-1/3vh flex flex-col md:flex-row justify-between p-6 md:p-12'>
        <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-montserrat">Gonzalo Rocha</h1>
            <p className='text-white  text-lg md:text-xl relative left-3 top-2'>React | Typescript | GraphQL</p>
        </div>
        <img  className="rounded-full mt-3 h-24 w-24 md:h-72 md:w-72" src={ProfilePic} alt="Foto de Perfil" />
    </header>
);
const About = () => (
    <section className="flex flex-row justify-around">
        <div className="w-3/5 ml-0 mt-12">
            <h2 className="text-4xl font-bold mb-2">{locale.getString("about.title")}</h2>
            <p>{locale.getString("about.paragraph")}</p>
            <ContactInfo list={ContactLlinks} />
        </div>
        <div className="text-center relative top-36 w-48 right-2">
            <div className="flex items-center">{locale.getString("speak.country")}<Flag src={MexicoFlag} /></div>
            <div className="flex items-center">{locale.getString("speak.languages.es")}<Flag src={MexicoFlag} />, {locale.getString("speak.languages.en")}<Flag src={USFlag} /></div>
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