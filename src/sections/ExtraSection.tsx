import {Section} from "../components";
import UIDesignIcon from "../icons/ui_design.svg";
import AgileIcon from "../icons/agile_icon.svg";

import locale from "../locale";

import {Card} from "../components";

function ExtraSection() {
    return (<Section>
        <h2 className="font-bold text-4xl mb-6 font-cabinet">{locale.getString("learning.title")}</h2>
        <Card className="w-full flex justify-around p-12">
            <div><img src={UIDesignIcon} alt="ui design icon" className="h-12 m-auto" />{locale.getString("learning.items.uxd")}</div>
            <div><img src={AgileIcon} alt="Agile Methodology icon" className="h-12 m-auto" />{locale.getString("learning.items.agile")}</div>
        </Card>
    </Section>)
}

export default ExtraSection;