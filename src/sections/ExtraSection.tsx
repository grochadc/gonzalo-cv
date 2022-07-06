import {Section} from "../components";
import AlgorithmIcon from "../icons/algorithm2.svg";
import ResponsiveIcon from "../icons/responsive.svg";
import UIDesignIcon from "../icons/ui_design.svg";

import locale from "../locale";

function ExtraSection() {
    return (<Section>
        <h1 className="font-bold text-3xl mb-6">{locale.getString("learning.title")}</h1>
        <div className="w-full flex justify-around border rounded p-12">
            <div><img src={AlgorithmIcon} alt="algorithm icon" className="h-12 m-auto" />{locale.getString("learning.items.datastruct")}</div>
            <div><img src={ResponsiveIcon} alt="responsive icon" className="h-12 m-auto" />{locale.getString("learning.items.responsive")}</div>
            <div><img src={UIDesignIcon} alt="ui design icon" className="h-12 m-auto" />{locale.getString("learning.items.uxd")}</div>
        </div>
    </Section>)
}

export default ExtraSection;