import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-CixcLOAa.js";import{c as r,r as i,s as a}from"./app-BW7bkF8O.js";import{t as o}from"./html2pdf-BShorWMF.js";import{a as s,i as c,u as l}from"./helpers-9QWy4g-p.js";var u=e(t(),1),d=e(o(),1),f=i();function p(){let{t:e}=n(),{entries:t,selectedAccount:i,filters:o}=r().props,[p,m]=(0,u.useState)(!1);(0,u.useEffect)(()=>{new URLSearchParams(window.location.search).get(`download`)===`pdf`&&h()},[]);let h=async()=>{m(!0);let e=document.querySelector(`.ledger-summary-container`);if(e){let t={margin:.25,filename:`ledger-summary-${s(o.from_date||new Date().toISOString())}.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{unit:`in`,format:`a4`,orientation:`portrait`}};try{await(0,d.default)().set(t).from(e).save(),setTimeout(()=>window.close(),1e3)}catch(e){console.error(`PDF generation failed:`,e)}}m(!1)};return(0,f.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,f.jsx)(a,{title:e(`Ledger Summary`)}),p&&(0,f.jsx)(`div`,{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`,children:(0,f.jsx)(`div`,{className:`bg-white p-6 rounded-lg shadow-lg`,children:(0,f.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,f.jsx)(`div`,{className:`animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600`}),(0,f.jsx)(`p`,{className:`text-lg font-semibold text-gray-700`,children:e(`Generating PDF...`)})]})})}),(0,f.jsxs)(`div`,{className:`ledger-summary-container bg-white max-w-4xl mx-auto p-12`,children:[(0,f.jsxs)(`div`,{className:`flex justify-between items-start mb-12`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-2xl font-bold mb-4`,children:l(`company_name`)||`YOUR COMPANY`}),(0,f.jsxs)(`div`,{className:`text-sm space-y-1`,children:[l(`company_address`)&&(0,f.jsx)(`p`,{children:l(`company_address`)}),(l(`company_city`)||l(`company_state`)||l(`company_zipcode`))&&(0,f.jsxs)(`p`,{children:[l(`company_city`),l(`company_state`)&&`, ${l(`company_state`)}`,` `,l(`company_zipcode`)]}),l(`company_country`)&&(0,f.jsx)(`p`,{children:l(`company_country`)}),l(`company_telephone`)&&(0,f.jsxs)(`p`,{children:[e(`Phone`),`: `,l(`company_telephone`)]}),l(`company_email`)&&(0,f.jsxs)(`p`,{children:[e(`Email`),`: `,l(`company_email`)]})]})]}),(0,f.jsxs)(`div`,{className:`text-right`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold mb-2`,children:e(`LEDGER SUMMARY`)}),(0,f.jsxs)(`div`,{className:`text-sm space-y-1`,children:[o.from_date&&o.to_date&&(0,f.jsxs)(`p`,{children:[e(`Period`),`: `,s(o.from_date),` - `,s(o.to_date)]}),i&&(0,f.jsxs)(`p`,{children:[e(`Account`),`: `,i.account_code,` - `,i.account_name]})]})]})]}),(0,f.jsx)(`div`,{className:`mb-6`,children:(0,f.jsxs)(`table`,{className:`w-full`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{className:`border-b-2 border-gray-800`,children:[(0,f.jsx)(`th`,{className:`text-left py-2 text-sm font-bold`,children:e(`Date`)}),(0,f.jsx)(`th`,{className:`text-left py-2 text-sm font-bold`,children:e(`Account`)}),(0,f.jsx)(`th`,{className:`text-left py-2 text-sm font-bold`,children:e(`Description`)}),(0,f.jsx)(`th`,{className:`text-right py-2 text-sm font-bold`,children:e(`Debit`)}),(0,f.jsx)(`th`,{className:`text-right py-2 text-sm font-bold`,children:e(`Credit`)})]})}),(0,f.jsx)(`tbody`,{children:t.map(e=>(0,f.jsxs)(`tr`,{className:`border-b border-gray-100`,children:[(0,f.jsx)(`td`,{className:`py-1.5 text-sm`,children:s(e.journal_date)}),(0,f.jsx)(`td`,{className:`py-1.5 text-sm`,children:e.account_code}),(0,f.jsx)(`td`,{className:`py-1.5 text-sm`,children:e.description||e.journal_description}),(0,f.jsx)(`td`,{className:`py-1.5 text-sm text-right tabular-nums`,children:e.debit_amount>0?c(e.debit_amount):`-`}),(0,f.jsx)(`td`,{className:`py-1.5 text-sm text-right tabular-nums`,children:e.credit_amount>0?c(e.credit_amount):`-`})]},e.id))})]})}),(0,f.jsxs)(`div`,{className:`mt-12 pt-6 border-t text-center text-sm text-gray-600`,children:[(0,f.jsx)(`p`,{children:l(`company_name`)}),(0,f.jsxs)(`p`,{children:[e(`Generated on`),` `,s(new Date().toISOString())]})]})]}),(0,f.jsx)(`style`,{children:`
                body {
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    font-family: Arial, sans-serif;
                }

                @page {
                    margin: 0.25in;
                    size: A4;
                }

                .ledger-summary-container {
                    max-width: 100%;
                    margin: 0;
                    box-shadow: none;
                }

                @media print {
                    body {
                        background: white;
                    }

                    .ledger-summary-container {
                        box-shadow: none;
                    }
                }
            `})]})}export{p as default};