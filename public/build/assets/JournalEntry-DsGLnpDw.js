import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-CixcLOAa.js";import{c as r,r as i,s as a}from"./app-BW7bkF8O.js";import{t as o}from"./html2pdf-BShorWMF.js";import{a as s,i as c,u as l}from"./helpers-9QWy4g-p.js";var u=e(t(),1),d=e(o(),1),f=i();function p(){let{t:e}=n(),{data:t,filters:i}=r().props,[o,p]=(0,u.useState)(!1);(0,u.useEffect)(()=>{new URLSearchParams(window.location.search).get(`download`)===`pdf`&&m()},[]);let m=async()=>{p(!0);let e=document.querySelector(`.report-container`);if(e){let t={margin:.25,filename:`journal-entry-report.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{unit:`in`,format:`a4`,orientation:`landscape`}};try{await(0,d.default)().set(t).from(e).save(),setTimeout(()=>window.close(),1e3)}catch(e){console.error(`PDF generation failed:`,e)}}p(!1)};return(0,f.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,f.jsx)(a,{title:e(`Journal Entry Report`)}),o&&(0,f.jsx)(`div`,{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`,children:(0,f.jsx)(`div`,{className:`bg-white p-6 rounded-lg shadow-lg`,children:(0,f.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,f.jsx)(`div`,{className:`animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600`}),(0,f.jsx)(`p`,{className:`text-lg font-semibold text-gray-700`,children:e(`Generating PDF...`)})]})})}),(0,f.jsxs)(`div`,{className:`report-container bg-white max-w-6xl mx-auto p-8`,children:[(0,f.jsx)(`div`,{className:`border-b-2 border-gray-800 pb-6 mb-8`,children:(0,f.jsxs)(`div`,{className:`flex justify-between items-start`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-3xl font-bold text-gray-900 mb-2`,children:l(`company_name`)||`YOUR COMPANY`}),(0,f.jsxs)(`div`,{className:`text-sm text-gray-600 space-y-0.5`,children:[l(`company_address`)&&(0,f.jsx)(`p`,{children:l(`company_address`)}),(l(`company_city`)||l(`company_state`)||l(`company_zipcode`))&&(0,f.jsxs)(`p`,{children:[l(`company_city`),l(`company_state`)&&`, ${l(`company_state`)}`,` `,l(`company_zipcode`)]}),l(`company_country`)&&(0,f.jsx)(`p`,{children:l(`company_country`)})]})]}),(0,f.jsxs)(`div`,{className:`text-right`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-gray-900 mb-3`,children:e(`JOURNAL ENTRY REPORT`)}),i.from_date&&i.to_date&&(0,f.jsxs)(`p`,{className:`text-sm text-gray-600`,children:[s(i.from_date),` `,e(`to`),` `,s(i.to_date)]})]})]})}),t.map(t=>(0,f.jsxs)(`div`,{className:`mb-6 border border-gray-300 p-4 page-break-inside-avoid`,children:[(0,f.jsxs)(`div`,{className:`flex justify-between mb-3 pb-2 border-b border-gray-200`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`font-bold text-base`,children:t.journal_number}),(0,f.jsxs)(`p`,{className:`text-sm text-gray-600`,children:[s(t.date),` | `,t.reference_type]}),(0,f.jsx)(`p`,{className:`text-sm text-gray-700`,children:t.description})]}),(0,f.jsxs)(`div`,{className:`text-right`,children:[(0,f.jsx)(`p`,{className:`text-sm font-semibold`,children:t.status===`posted`?e(`Posted`):e(`Draft`)}),!t.is_balanced&&(0,f.jsx)(`p`,{className:`text-sm text-red-600 font-semibold`,children:e(`Unbalanced`)})]})]}),(0,f.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{className:`border-b-2 border-black`,children:[(0,f.jsx)(`th`,{className:`text-left py-2 px-2 text-sm font-semibold w-24`,children:e(`Account Code`)}),(0,f.jsx)(`th`,{className:`text-left py-2 px-2 text-sm font-semibold w-48`,children:e(`Account Name`)}),(0,f.jsx)(`th`,{className:`text-left py-2 px-2 text-sm font-semibold`,children:e(`Description`)}),(0,f.jsx)(`th`,{className:`text-right py-2 px-2 text-sm font-semibold w-28`,children:e(`Debit`)}),(0,f.jsx)(`th`,{className:`text-right py-2 px-2 text-sm font-semibold w-28`,children:e(`Credit`)})]})}),(0,f.jsxs)(`tbody`,{children:[t.items.map((e,t)=>(0,f.jsxs)(`tr`,{className:`border-b border-gray-200`,children:[(0,f.jsx)(`td`,{className:`py-2 px-2 text-sm`,children:e.account_code}),(0,f.jsx)(`td`,{className:`py-2 px-2 text-sm`,children:e.account_name}),(0,f.jsx)(`td`,{className:`py-2 px-2 text-sm break-words`,children:e.description}),(0,f.jsx)(`td`,{className:`py-2 px-2 text-sm text-right tabular-nums`,children:e.debit>0?c(e.debit):`-`}),(0,f.jsx)(`td`,{className:`py-2 px-2 text-sm text-right tabular-nums`,children:e.credit>0?c(e.credit):`-`})]},t)),(0,f.jsxs)(`tr`,{className:`border-t-2 border-black`,children:[(0,f.jsx)(`td`,{colSpan:3,className:`py-2 px-2 text-sm font-bold`,children:e(`Total`)}),(0,f.jsx)(`td`,{className:`py-2 px-2 text-sm text-right font-bold tabular-nums`,children:c(t.total_debit)}),(0,f.jsx)(`td`,{className:`py-2 px-2 text-sm text-right font-bold tabular-nums`,children:c(t.total_credit)})]})]})]})]},t.id)),(0,f.jsx)(`div`,{className:`mt-8 pt-4 border-t text-center text-xs text-gray-600`,children:(0,f.jsxs)(`p`,{children:[e(`Generated on`),` `,s(new Date().toISOString())]})})]}),(0,f.jsx)(`style`,{children:`
                body {
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    font-family: Arial, sans-serif;
                }

                @page {
                    margin: 0.25in;
                    size: A4 landscape;
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