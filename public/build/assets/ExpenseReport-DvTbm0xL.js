import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-D06PqJaQ.js";import{c as r,r as i,s as a}from"./app-C64CQEWp.js";import{t as o}from"./html2pdf-BShorWMF.js";import{a as s,i as c,u as l}from"./helpers-zinOe_Te.js";var u=e(t(),1),d=e(o(),1),f=i();function p(){let{t:e}=n(),{data:t,filters:i}=r().props,[o,p]=(0,u.useState)(!1),m=e=>t.total_expenses===0?0:(e/t.total_expenses*100).toFixed(1);(0,u.useEffect)(()=>{new URLSearchParams(window.location.search).get(`download`)===`pdf`&&h()},[]);let h=async()=>{p(!0);let e=document.querySelector(`.report-container`);if(e){let t={margin:.25,filename:`expense-report.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{unit:`in`,format:`a4`,orientation:`portrait`}};try{await(0,d.default)().set(t).from(e).save(),setTimeout(()=>window.close(),1e3)}catch(e){console.error(`PDF generation failed:`,e)}}p(!1)};return(0,f.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,f.jsx)(a,{title:e(`Expense Report`)}),o&&(0,f.jsx)(`div`,{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`,children:(0,f.jsx)(`div`,{className:`bg-white p-6 rounded-lg shadow-lg`,children:(0,f.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,f.jsx)(`div`,{className:`animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600`}),(0,f.jsx)(`p`,{className:`text-lg font-semibold text-gray-700`,children:e(`Generating PDF...`)})]})})}),(0,f.jsxs)(`div`,{className:`report-container bg-white max-w-5xl mx-auto p-8`,children:[(0,f.jsx)(`div`,{className:`border-b-2 border-gray-800 pb-6 mb-8`,children:(0,f.jsxs)(`div`,{className:`flex justify-between items-start`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-3xl font-bold text-gray-900 mb-2`,children:l(`company_name`)||`YOUR COMPANY`}),(0,f.jsxs)(`div`,{className:`text-sm text-gray-600 space-y-0.5`,children:[l(`company_address`)&&(0,f.jsx)(`p`,{children:l(`company_address`)}),(l(`company_city`)||l(`company_state`)||l(`company_zipcode`))&&(0,f.jsxs)(`p`,{children:[l(`company_city`),l(`company_state`)&&`, ${l(`company_state`)}`,` `,l(`company_zipcode`)]}),l(`company_country`)&&(0,f.jsx)(`p`,{children:l(`company_country`)})]})]}),(0,f.jsxs)(`div`,{className:`text-right`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-gray-900 mb-3`,children:e(`EXPENSE REPORT`)}),(0,f.jsxs)(`p`,{className:`text-sm text-gray-600`,children:[s(i.from_date),` `,e(`to`),` `,s(i.to_date)]})]})]})}),(0,f.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{className:`border-b-2 border-black`,children:[(0,f.jsx)(`th`,{className:`text-left py-2 px-3 text-sm font-semibold w-16`,children:e(`Rank`)}),(0,f.jsx)(`th`,{className:`text-left py-2 px-3 text-sm font-semibold w-24`,children:e(`Account Code`)}),(0,f.jsx)(`th`,{className:`text-left py-2 px-3 text-sm font-semibold`,children:e(`Expense Category`)}),(0,f.jsx)(`th`,{className:`text-right py-2 px-3 text-sm font-semibold w-32`,children:e(`Amount`)}),(0,f.jsx)(`th`,{className:`text-right py-2 px-3 text-sm font-semibold w-24`,children:e(`% of Total`)})]})}),(0,f.jsxs)(`tbody`,{children:[t.expenses.map((e,t)=>(0,f.jsxs)(`tr`,{className:`border-b border-gray-200 page-break-inside-avoid`,children:[(0,f.jsx)(`td`,{className:`py-2 px-3 text-sm font-medium`,children:t+1}),(0,f.jsx)(`td`,{className:`py-2 px-3 text-sm`,children:e.account_code}),(0,f.jsx)(`td`,{className:`py-2 px-3 text-sm break-words`,children:e.account_name}),(0,f.jsx)(`td`,{className:`py-2 px-3 text-sm text-right font-semibold tabular-nums`,children:c(e.amount)}),(0,f.jsxs)(`td`,{className:`py-2 px-3 text-sm text-right tabular-nums`,children:[m(e.amount),`%`]})]},t)),(0,f.jsxs)(`tr`,{className:`border-t-2 border-black`,children:[(0,f.jsx)(`td`,{colSpan:3,className:`py-3 px-3 text-sm font-bold`,children:e(`Total Expenses`)}),(0,f.jsx)(`td`,{className:`py-3 px-3 text-sm text-right font-bold tabular-nums`,children:c(t.total_expenses)}),(0,f.jsx)(`td`,{className:`py-3 px-3 text-sm text-right font-bold tabular-nums`,children:`100%`})]})]})]}),(0,f.jsx)(`div`,{className:`mt-8 pt-4 border-t text-center text-xs text-gray-600`,children:(0,f.jsxs)(`p`,{children:[e(`Generated on`),` `,s(new Date().toISOString())]})})]}),(0,f.jsx)(`style`,{children:`
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