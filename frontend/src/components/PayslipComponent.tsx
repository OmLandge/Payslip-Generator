import { useState } from "react";
import payslipElement from "../assets/payslip.png"
import { PayslipViewer } from "./PayslipViewer";
import { css, imports } from "../utilities/utils";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { createRoot } from "react-dom/client";

export const PayslipComponent = () => {
    const [postInputs, setPostInputs] = useState("");

    // const downloadPDF = () => {
    //     const capture = document.querySelector('.captureForPDF');
    //     //@ts-ignore
    //     html2canvas(capture).then((canvas) => {
    //         console.log("img created")
    //         const imgData = canvas.toDataURL('img/png');
    //         const doc = new jsPDF('p','mm','a4');
    //         const componentWidth = doc.internal.pageSize.getWidth();
    //         const componentHeight = doc.internal.pageSize.getHeight();
    //         doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
    //         doc.save(`payslip ${postInputs}.pdf`);
    //     })
    // }

    async function sendRequest(){
        try {
            let newWindow = window.open('', '', 'popup,width=500,height=800,left=300,top=500');

            if (newWindow) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(imports, 'text/html');
                Array.from(doc.head.childNodes).forEach(node => {
                newWindow.document.head.appendChild(node);
                });

                const styleTag = newWindow.document.createElement('style');
                styleTag.textContent = css;
                newWindow.document.head.appendChild(styleTag);
            
                const rootElement = newWindow.document.createElement('div');
                rootElement.className = 'captureForPDF'; 
                newWindow.document.body.appendChild(rootElement);

                const root = createRoot(rootElement);
            
                root.render(<PayslipViewer month={postInputs} />);
                
                setTimeout(() => {
                    const capture = newWindow.document.querySelector('.captureForPDF');
                    if (capture) {
                        //@ts-ignore
                        html2canvas(capture).then((canvas) => {
                            const imgData = canvas.toDataURL('image/png');
                            const doc = new jsPDF('p', 'mm', 'a4');

                            const pageWidth = doc.internal.pageSize.getWidth();
                            const pageHeight = doc.internal.pageSize.getHeight();
                            const imgWidth = canvas.width;
                            const imgHeight = canvas.height;
                            const scaleFactor = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
                            const pdfWidth = imgWidth * scaleFactor;
                            const pdfHeight = imgHeight * scaleFactor;
                            const marginX = (pageWidth - pdfWidth) / 2;
                            const marginY = (pageHeight - pdfHeight) / 2;

                            doc.addImage(imgData, 'PNG', marginX, marginY, pdfWidth, pdfHeight);
                            doc.save(`payslip_${postInputs}.pdf`);

                            newWindow.close();
                        });
                    } else {
                        console.error('.captureForPDF element not found');
                    }
                }, 1000);

            }


        } catch (e) {
            console.log(e);
        }
    }

    function processInput(value: string){
        const year = value.split('-')[0];
        const initialMonth = Number(value.split('-')[1]);
        const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let finalMonth = arr[initialMonth-1];
        setPostInputs(`${finalMonth} ${year}`);
    }

    return <div className="w-full flex justify-center mb-10">
        <div className="w-11/12 lg:w-1/2 h-[480px] sm:h-[580px] grid grid-cols-1 sm:grid-cols-2 absolute top-[150px] border rounded-xl shadow-2xl">
            <div className="hidden sm:block justify-self-end py-7">
                <div className="h-full flex flex-col justify-center">
                    <img src={payslipElement} width={400} />
                </div>
            </div>
            <div style={{backgroundColor: "rgb(245 191 191 / 54%)"}} className="rounded-xl">
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="text-2xl font-medium text-gray-600 mb-5">Get your payslip</div>
                    <div className="flex flex-col items-center">
                        <input onInput={(e: React.FormEvent<HTMLInputElement>) => {
                            const target = e.target as HTMLInputElement;
                            processInput(target.value);
                        }} className="p-2 my-3 rounded-md shadow-sm focus:outline-none" type="month" placeholder="Month" />
                        <button onClick={sendRequest} className="my-4 rounded-full border transition-all w-[130px] ease-in-out duration-500 px-6 h-10 border-gray-400 bg-red-300 text-white hover:bg-red-400 hover:font-medium">Get</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}