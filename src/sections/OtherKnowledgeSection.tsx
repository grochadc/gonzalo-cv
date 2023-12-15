import {Section} from "../components";
import AlgorithmIcon from "../icons/algorithm2.svg";
import ResponsiveIcon from "../icons/responsive.svg";
import CleanCodeIcon from "../icons/clean_code_icon.svg";

import locale from "../locale";

import {Card} from "../components";

function OtherSection() {
    return (<Section>
        <h2 className="font-bold text-4xl mb-6 font-cabinet">{locale.getString("otherTech.title")}</h2>
        <Card className="w-full flex justify-around p-12">
            <div><img src={AlgorithmIcon} alt="algorithm icon" className="h-12 m-auto" />{locale.getString("otherTech.items.datastruct")}</div>
            <div><img src={ResponsiveIcon} alt="responsive icon" className="h-12 m-auto" />{locale.getString("otherTech.items.responsive")}</div>
            <div><img src={CleanCodeIcon} alt="clean code icon" className="h-12 m-auto" />{locale.getString("otherTech.items.cleanCode")}</div>
        </Card>
    </Section>)
}

export default OtherSection;