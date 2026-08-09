import{a as e,r as t}from"./rolldown-runtime-B0Z9INg1.js";import{t as n}from"./html2pdf-BShorWMF.js";import{a as r,i}from"./helpers-zinOe_Te.js";var a=t({downloadReceiptPDF:()=>s}),o=e(n(),1),s=async(e,t)=>{let n=`
        <div class="receipt">
            <div class="header">
                <div class="company-name">${t?.company_name||`COMPANY NAME`}</div>
                <div class="company-info">
                    ${t?.company_address||`Company Address`}<br>
                    ${t?.company_city||`City`}, ${t?.company_state||`State`}<br>
                    ${t?.company_country||`Country`} - ${t?.company_zipcode||`Zipcode`}
                </div>
            </div>
            
            <div class="separator"></div>
            
            <div class="receipt-info">
                <div class="info-row">
                    <span>Receipt No:</span>
                    <span>${e.pos_number}</span>
                </div>
                <div class="info-row">
                    <span>Date:</span>
                    <span>${r(new Date)}</span>
                </div>
                <div class="info-row">
                    <span>Time:</span>
                    <span>${new Date().toLocaleTimeString()}</span>
                </div>
                <div class="info-row">
                    <span>Customer:</span>
                    <span>${e.customer?.name||`Walk-in Customer`}</span>
                </div>
            </div>
            
            <div class="separator"></div>
            
            <div class="items-section">
                ${e.items.map(e=>{let t=e.price*e.quantity,n=0,r=``;return r=e.taxes&&e.taxes.length>0?e.taxes.map(e=>(n+=t*e.rate/100,`${e.name} (${e.rate}%)`)).join(`, `):`No Tax`,`
                        <div class="item">
                            <div class="item-name">${e.name}</div>
                            <div class="item-details">
                                <div class="total-row">
                                    <span>Qty: ${e.quantity}</span>
                                    <span>Price: ${i(e.price)}</span>
                                </div>
                                <div class="total-row">
                                    <span>Tax: ${r}</span>
                                    <span>Tax Amount: ${i(n)}</span>
                                </div>
                                <div class="total-row" style="font-weight: bold;">
                                    <span>Subtotal:</span>
                                    <span>${i(t+n)}</span>
                                </div>
                            </div>
                        </div>
                    `}).join(``)}
            </div>
            
            <div class="separator"></div>
            
            <div class="totals">
                <div class="total-row">
                    <span>Discount:</span>
                    <span>-${i(e.discount)}</span>
                </div>
                <div class="final-total">
                    <span>TOTAL:</span>
                    <span>${i(e.total)}</span>
                </div>
            </div>
            
            <div class="separator"></div>
            
            <div class="footer">
                <div style="font-weight: bold;">*** THANK YOU ***</div>
                <div>Visit Again!</div>
            </div>
        </div>
        
        <style>
            .receipt { max-width: 400px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; }
            .header { text-align: center; margin-bottom: 20px; }
            .company-name { font-size: 20px; font-weight: bold; margin-bottom: 10px; }
            .company-info { font-size: 12px; line-height: 1.4; }
            .separator { border-top: 1px dashed #000; margin: 15px 0; }
            .info-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .item { margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dotted #ccc; }
            .item-name { font-weight: bold; margin-bottom: 8px; }
            .item-details { font-size: 12px; }
            .total-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .final-total { display: flex; justify-content: space-between; font-weight: bold; font-size: 16px; border-top: 2px solid #000; padding-top: 10px; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; }
        </style>
    `,a=document.createElement(`div`);a.innerHTML=n,document.body.appendChild(a);let s={margin:.1,filename:`receipt-${e.pos_number}.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{unit:`mm`,format:[80,297],orientation:`portrait`}};try{await(0,o.default)().set(s).from(a).save()}catch(e){console.error(`PDF generation failed:`,e)}finally{document.body.removeChild(a)}};export{s as n,a as t};