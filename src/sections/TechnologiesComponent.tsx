import technologies from "../data/technologies";
import locale from "../locale";

import {Card} from "../components";

const Entry = (props: {name: string; icon: any; since: string; nowYear: number}) => {
    const yearDiff = props.nowYear - Number(props.since);
    const yearsExpression = yearDiff > 1 ? locale.getString("tech.years") : locale.getString("tech.year");
    return (
    <div className="flex justify-between w-full items-center">
      <div className="h-28 flex items-center">
        <span className="text-xl font-bold">{props.since}</span>
        <div className="flex border border-black w-0 h-full relative left-6"></div>
        <div className="w-12 h-12 p-1 rounded-full bg-white z-10"><img src={props.icon} alt={props.name + " icon"} /></div>
        <div className="flex flex-row rounded drop-shadow-xl ml-2 p-3"><h3 className="text-3xl mx-2">{props.name}</h3> <span>{yearDiff + " " + yearsExpression}</span></div>
      </div>
    </div>);
  }

function TechnologiesComponent(){
    const now = new Date();
    return (<section className='flex flex-col items-center mt-20'>
    <h2 className="text-5xl font-bold mb-5 font-cabinet">{locale.getString("tech.title")}</h2>
    <Card className="px-2 py-12 w-3/4 flex flex-col items-center">
      <div>
      <div className="w-full"><span className="text-2xl font-bold">{locale.getString("tech.since")}</span></div>
        {technologies.map((tech, index) => {
        return <Entry key={tech.name} name={tech.name} icon={tech.icon} since={tech.since} nowYear={now.getFullYear()} />;
      })}</div>
    </Card>
    </section>)
}

export default TechnologiesComponent;