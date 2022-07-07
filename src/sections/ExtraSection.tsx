import {Section} from "../components";
import AlgorithmIcon from "../icons/algorithm2.svg";
import ResponsiveIcon from "../icons/responsive.svg";
import UIDesignIcon from "../icons/ui_design.svg";

import locale from "../locale";

import {Card} from "../components";

function ExtraSection() {
    return (<Section>
        <h2 className="font-bold text-4xl mb-6 font-cabinet">{locale.getString("learning.title")}</h2>
        <Card className="w-full flex justify-around p-12">
            <div><img src={AlgorithmIcon} alt="algorithm icon" className="h-12 m-auto" />{locale.getString("learning.items.datastruct")}</div>
            <div><img src={ResponsiveIcon} alt="responsive icon" className="h-12 m-auto" />{locale.getString("learning.items.responsive")}</div>
            <div><img src={UIDesignIcon} alt="ui design icon" className="h-12 m-auto" />{locale.getString("learning.items.uxd")}</div>
        </Card>
    </Section>)
}

export default ExtraSection;