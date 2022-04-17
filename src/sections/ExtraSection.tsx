import {Section} from "../components";
import AlgorithmIcon from "../icons/algorithm2.svg";
import ResponsiveIcon from "../icons/responsive.svg";
import UIDesignIcon from "../icons/ui_design.svg";
function ExtraSection() {
    return (<Section>
        <h1 className="font-bold text-3xl mb-6">Actualmente Apendiendo</h1>
        <div className="w-full flex justify-around border rounded p-12">
            <div><img src={AlgorithmIcon} alt="algorithm icon" className="h-12 m-auto" />Algoritmos y Data Structures</div>
            <div><img src={ResponsiveIcon} alt="responsive icon" className="h-12 m-auto" />Responsive CSS</div>
            <div><img src={UIDesignIcon} alt="ui design icon" className="h-12 m-auto" />Diseño UX/UI</div>
        </div>
    </Section>)
}

export default ExtraSection;