import ProfilePic from "../profile.jpeg";
import TwitterTile from "../icons/twitter-tile.svg";
import GithubTile from "../icons/github-tile.svg";
import {Link} from "../components";

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
            <div className="flex w-80 justify-around mt-5">
                <span className="flex"><img className="h-6 mr-2" src={TwitterTile} alt="twitter icon"/><Link href="https://twitter.com/medicengonzo">@medicengonzo</Link></span>
                <span className="flex"><img className="h-6 mr-2" src={GithubTile} alt="github icon" /><Link href="https://github.com/grochadc">grochadc</Link></span>
            </div>
        </div>
        <div className="text-center relative top-36 w-48 right-2">
            <p>Mexicano 🇲🇽</p>
            <p>Español 🇲🇽, Inglés 🇺🇸</p>
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