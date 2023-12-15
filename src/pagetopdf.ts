import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

let closureRenderedDoc: Document;
function printPDF(finalPDFWidth: number, finalPDFHeight: number) {
    const null_or_dom = document.getElementById('root');
    if(!null_or_dom) {
        console.log("Got null instead of HTMLElement");
    }
    const dom: HTMLElement = null_or_dom === null ? new HTMLElement() : null_or_dom;
    html2canvas(dom, { onclone: (doc) => {
        console.log("Cloning...")
        closureRenderedDoc = doc;
        console.log("Document appended to closure var");
        const button_or_null = doc.getElementById('print-button');
        if(button_or_null) {
            button_or_null.style.visibility = 'hidden';
        }

        return closureRenderedDoc;
    }})
    .then((canvas) => {
        console.log("Canvas created...")
        const img = canvas.toDataURL('image/png');
        const pdf = new jsPdf({ unit: "mm", format: [finalPDFWidth,finalPDFHeight] });
        pdf.addImage(img, 'JPEG', 0, 0, finalPDFWidth, finalPDFHeight);
        console.log("Downloading pdf...")
        pdf.save('cv-gonzalo-dic-2023.pdf');
    })
    .catch((err) => { console.error(err) })
}

export default printPDF;
