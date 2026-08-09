import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-D06PqJaQ.js";import{c as r,r as i,s as a}from"./app-C64CQEWp.js";import{t as o}from"./html2pdf-BShorWMF.js";import{a as s,i as c,u as l}from"./helpers-zinOe_Te.js";var u=e(t(),1),d=e(o(),1),f=i();function p(){let{t:e}=n(),{data:t,filters:i}=r().props,[o,p]=(0,u.useState)(!1);(0,u.useEffect)(()=>{new URLSearchParams(window.location.search).get(`download`)===`pdf`&&m()},[]);let m=async()=>{p(!0);let e=document.querySelector(`.report-container`);if(e){let t={margin:.25,filename:`cash-flow-statement.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{unit:`in`,format:`a4`,orientation:`portrait`}};try{await(0,d.default)().set(t).from(e).save(),setTimeout(()=>window.close(),1e3)}catch(e){console.error(`PDF generation failed:`,e)}}p(!1)};return(0,f.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,f.jsx)(a,{title:e(`Cash Flow Statement`)}),o&&(0,f.jsx)(`div`,{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`,children:(0,f.jsx)(`div`,{className:`bg-white p-6 rounded-lg shadow-lg`,children:(0,f.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,f.jsx)(`div`,{className:`animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600`}),(0,f.jsx)(`p`,{className:`text-lg font-semibold text-gray-700`,children:e(`Generating PDF...`)})]})})}),(0,f.jsxs)(`div`,{className:`report-container bg-white max-w-5xl mx-auto p-8`,children:[(0,f.jsx)(`div`,{className:`border-b-2 border-gray-800 pb-6 mb-8`,children:(0,f.jsxs)(`div`,{className:`flex justify-between items-start`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-3xl font-bold text-gray-900 mb-2`,children:l(`company_name`)||`YOUR COMPANY`}),(0,f.jsxs)(`div`,{className:`text-sm text-gray-600 space-y-0.5`,children:[l(`company_address`)&&(0,f.jsx)(`p`,{children:l(`company_address`)}),(l(`company_city`)||l(`company_state`)||l(`company_zipcode`))&&(0,f.jsxs)(`p`,{children:[l(`company_city`),l(`company_state`)&&`, ${l(`company_state`)}`,` `,l(`company_zipcode`)]}),l(`company_country`)&&(0,f.jsx)(`p`,{children:l(`company_country`)})]})]}),(0,f.jsxs)(`div`,{className:`text-right`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-gray-900 mb-3`,children:e(`CASH FLOW STATEMENT`)}),(0,f.jsxs)(`p`,{className:`text-sm text-gray-600`,children:[s(i.from_date),` `,e(`to`),` `,s(i.to_date)]})]})]})}),(0,f.jsx)(`table`,{className:`w-full border-collapse`,children:(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{className:`border-b-2 border-black page-break-inside-avoid`,children:[(0,f.jsx)(`td`,{className:`py-3 text-sm font-bold`,children:e(`Beginning Cash Balance`)}),(0,f.jsx)(`td`,{className:`py-3 text-sm font-bold text-right tabular-nums w-40`,children:c(t.beginning_cash)})]}),(0,f.jsx)(`tr`,{className:`page-break-inside-avoid`,children:(0,f.jsx)(`td`,{colSpan:2,className:`pt-6 pb-2`,children:(0,f.jsx)(`h3`,{className:`font-bold text-base`,children:e(`Cash Flow from Operating Activities`)})})}),(0,f.jsxs)(`tr`,{className:`page-break-inside-avoid`,children:[(0,f.jsx)(`td`,{className:`py-2 pl-6 text-sm`,children:e(`Net cash from operations`)}),(0,f.jsx)(`td`,{className:`py-2 text-sm text-right font-semibold tabular-nums`,children:c(t.operating)})]}),(0,f.jsx)(`tr`,{className:`page-break-inside-avoid`,children:(0,f.jsx)(`td`,{colSpan:2,className:`pt-4 pb-2`,children:(0,f.jsx)(`h3`,{className:`font-bold text-base`,children:e(`Cash Flow from Investing Activities`)})})}),(0,f.jsxs)(`tr`,{className:`page-break-inside-avoid`,children:[(0,f.jsx)(`td`,{className:`py-2 pl-6 text-sm`,children:e(`Net cash from investing`)}),(0,f.jsx)(`td`,{className:`py-2 text-sm text-right font-semibold tabular-nums`,children:c(t.investing)})]}),(0,f.jsx)(`tr`,{className:`page-break-inside-avoid`,children:(0,f.jsx)(`td`,{colSpan:2,className:`pt-4 pb-2`,children:(0,f.jsx)(`h3`,{className:`font-bold text-base`,children:e(`Cash Flow from Financing Activities`)})})}),(0,f.jsxs)(`tr`,{className:`page-break-inside-avoid`,children:[(0,f.jsx)(`td`,{className:`py-2 pl-6 text-sm`,children:e(`Net cash from financing`)}),(0,f.jsx)(`td`,{className:`py-2 text-sm text-right font-semibold tabular-nums`,children:c(t.financing)})]}),(0,f.jsxs)(`tr`,{className:`border-t-2 border-gray-400 page-break-inside-avoid`,children:[(0,f.jsx)(`td`,{className:`py-3 text-sm font-bold`,children:e(`Net Increase/Decrease in Cash`)}),(0,f.jsx)(`td`,{className:`py-3 text-sm font-bold text-right tabular-nums`,children:c(t.net_cash_flow)})]}),(0,f.jsxs)(`tr`,{className:`border-t-4 border-black page-break-inside-avoid`,children:[(0,f.jsx)(`td`,{className:`py-4 text-base font-bold`,children:e(`Ending Cash Balance`)}),(0,f.jsx)(`td`,{className:`py-4 text-base font-bold text-right tabular-nums`,children:c(t.ending_cash)})]})]})}),(0,f.jsx)(`div`,{className:`mt-8 pt-4 border-t text-center text-xs text-gray-600`,children:(0,f.jsxs)(`p`,{children:[e(`Generated on`),` `,s(new Date().toISOString())]})})]}),(0,f.jsx)(`style`,{children:`
                body {
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    font-family: Arial, sans-serif;
                }

                @page {
                    margin: 0.25in;
                    size: A4;
                }

                .report-container {
                    max-width: 100%;
                    margin: 0;
                    box-shadow: none;
                }

                .page-break-inside-avoid {
                    page-break-inside: avoid;
                    break-inside: avoid;
                }

                @media print {
                    body {
                        background: white;
                    }

                    .report-container {
                        box-shadow: none;
                    }

                    .page-break-inside-avoid {
                        page-break-inside: avoid;
                        break-inside: avoid;
                    }
                }
            `})]})}export{p as default};