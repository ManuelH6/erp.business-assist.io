import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-C0iIS_rx.js";import{c as r,r as i,s as a}from"./app-BujDEe4w.js";import{t as o}from"./html2pdf-BShorWMF.js";import{a as s,i as c,u as l}from"./helpers-e1zREy1G.js";var u=e(t(),1),d=e(o(),1),f=i();function p(){let{t:e}=n(),{profitLoss:t}=r().props,[i,o]=(0,u.useState)(!1);(0,u.useEffect)(()=>{new URLSearchParams(window.location.search).get(`download`)===`pdf`&&p()},[]);let p=async()=>{o(!0);let e=document.querySelector(`.profit-loss-container`);if(e){let n={margin:.25,filename:`profit-loss-${s(t.from_date)}-to-${s(t.to_date)}.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{unit:`in`,format:`a4`,orientation:`portrait`}};try{await(0,d.default)().set(n).from(e).save(),setTimeout(()=>window.close(),1e3)}catch(e){console.error(`PDF generation failed:`,e)}}o(!1)};return(0,f.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,f.jsx)(a,{title:e(`Profit & Loss Statement`)}),i&&(0,f.jsx)(`div`,{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`,children:(0,f.jsx)(`div`,{className:`bg-white p-6 rounded-lg shadow-lg`,children:(0,f.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,f.jsx)(`div`,{className:`animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600`}),(0,f.jsx)(`p`,{className:`text-lg font-semibold text-gray-700`,children:e(`Generating PDF...`)})]})})}),(0,f.jsxs)(`div`,{className:`profit-loss-container bg-white max-w-4xl mx-auto p-12`,children:[(0,f.jsxs)(`div`,{className:`flex justify-between items-start mb-12`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-2xl font-bold mb-4`,children:l(`company_name`)||`YOUR COMPANY`}),(0,f.jsxs)(`div`,{className:`text-sm space-y-1`,children:[l(`company_address`)&&(0,f.jsx)(`p`,{children:l(`company_address`)}),(l(`company_city`)||l(`company_state`)||l(`company_zipcode`))&&(0,f.jsxs)(`p`,{children:[l(`company_city`),l(`company_state`)&&`, ${l(`company_state`)}`,` `,l(`company_zipcode`)]}),l(`company_country`)&&(0,f.jsx)(`p`,{children:l(`company_country`)}),l(`company_telephone`)&&(0,f.jsxs)(`p`,{children:[e(`Phone`),`: `,l(`company_telephone`)]}),l(`company_email`)&&(0,f.jsxs)(`p`,{children:[e(`Email`),`: `,l(`company_email`)]})]})]}),(0,f.jsxs)(`div`,{className:`text-right`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold mb-2`,children:e(`PROFIT & LOSS STATEMENT`)}),(0,f.jsx)(`div`,{className:`text-sm space-y-1`,children:(0,f.jsxs)(`p`,{children:[e(`Period`),`: `,s(t.from_date),` - `,s(t.to_date)]})})]})]}),(0,f.jsxs)(`div`,{className:`grid grid-cols-2 gap-8 mb-6`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-base font-bold border-b-2 border-gray-800 pb-2 mb-3`,children:e(`Revenue`)}),t.revenue.length>0?t.revenue.map(e=>(0,f.jsxs)(`div`,{className:`flex justify-between py-1.5 text-sm`,children:[(0,f.jsxs)(`span`,{children:[e.account_code,` - `,e.account_name]}),(0,f.jsx)(`span`,{className:`tabular-nums`,children:c(e.balance)})]},e.id)):(0,f.jsx)(`p`,{className:`text-sm py-2`,children:e(`No revenue accounts`)}),(0,f.jsxs)(`div`,{className:`flex justify-between py-2 font-semibold text-sm border-t mt-2`,children:[(0,f.jsx)(`span`,{children:e(`Total Revenue`)}),(0,f.jsx)(`span`,{className:`tabular-nums`,children:c(t.total_revenue)})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-base font-bold border-b-2 border-gray-800 pb-2 mb-3`,children:e(`Expenses`)}),t.expenses.length>0?t.expenses.map(e=>(0,f.jsxs)(`div`,{className:`flex justify-between py-1.5 text-sm`,children:[(0,f.jsxs)(`span`,{children:[e.account_code,` - `,e.account_name]}),(0,f.jsx)(`span`,{className:`tabular-nums`,children:c(e.balance)})]},e.id)):(0,f.jsx)(`p`,{className:`text-sm py-2`,children:e(`No expense accounts`)}),(0,f.jsxs)(`div`,{className:`flex justify-between py-2 font-semibold text-sm border-t mt-2`,children:[(0,f.jsx)(`span`,{children:e(`Total Expenses`)}),(0,f.jsx)(`span`,{className:`tabular-nums`,children:c(t.total_expenses)})]})]})]}),(0,f.jsx)(`div`,{className:`mt-8 pt-4 border-t-2 border-gray-800`,children:(0,f.jsxs)(`div`,{className:`flex justify-between py-2 font-bold text-base`,children:[(0,f.jsx)(`span`,{children:t.net_profit>=0?e(`Net Profit`):e(`Net Loss`)}),(0,f.jsx)(`span`,{className:`tabular-nums`,children:c(Math.abs(t.net_profit))})]})}),(0,f.jsx)(`div`,{className:`mt-12 pt-6 border-t text-center text-sm text-gray-600`,children:(0,f.jsxs)(`p`,{children:[e(`Generated on`),` `,s(new Date().toISOString())]})})]}),(0,f.jsx)(`style`,{children:`
                body {
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    font-family: Arial, sans-serif;
                }

                @page {
                    margin: 0.25in;
                    size: A4;
                }

                .profit-loss-container {
                    max-width: 100%;
                    margin: 0;
                    box-shadow: none;
                }

                @media print {
                    body {
                        background: white;
                    }

                    .profit-loss-container {
                        box-shadow: none;
                    }
                }
            `})]})}export{p as default};