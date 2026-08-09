import{r as e}from"./rolldown-runtime-B0Z9INg1.js";import{a as t,i as n}from"./helpers-BliZB32K.js";var r=e({printReceipt:()=>i}),i=(e,r)=>{let i=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Receipt - ${e.pos_number}</title>
        <style>
            @page {
                size: 80mm auto;
                margin: 0;
            }
            @media print {
                body { 
                    width: 80mm;
                    margin: 0;
                    padding: 0;
                }
            }
            body { 
                font-family: 'Courier New', monospace; 
                width: 80mm;
                margin: 0; 
                padding: 0;
                font-size: 12px;
                line-height: 1.3;
                color: #000;
            }
            .receipt { 
                width: 100%;
                text-align: center;
                padding: 5mm;
                margin: 0;
                box-sizing: border-box;
            }
            .header {
                margin-bottom: 8px;
            }
            .company-name {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 3px;
                letter-spacing: 0.5px;
            }
            .company-info {
                font-size: 11px;
                line-height: 1.4;
                margin-bottom: 5px;
            }
            .separator {
                border-top: 2px dashed #000;
                margin: 8px 0;
            }
            .receipt-info {
                text-align: left;
                margin-bottom: 6px;
            }
            .info-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 2px;
                font-size: 12px;
            }
            .items-section {
                text-align: left;
                margin-bottom: 6px;
            }
            .item {
                margin-bottom: 10px;
                border-bottom: 1px dotted #000;
                padding-bottom: 5px;
            }
            .item-name {
                font-weight: bold;
                font-size: 13px;
                margin-bottom: 3px;
            }
            .item-details {
                font-size: 11px;
            }
            .item-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 2px;
            }
            .totals {
                text-align: left;
                margin-bottom: 6px;
            }
            .total-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 3px;
                font-size: 12px;
            }
            .final-total {
                display: flex;
                justify-content: space-between;
                font-weight: bold;
                font-size: 16px;
                border-top: 2px solid #000;
                padding-top: 5px;
                margin-top: 5px;
            }
            .footer {
                text-align: center;
                margin-top: 10px;
                font-size: 11px;
            }
            .thank-you {
                font-weight: bold;
                margin-bottom: 3px;
            }
        </style>
    </head>
    <body>
        <div class="receipt">
            <div class="header">
                <div class="company-name">${r?.company_name||`COMPANY NAME`}</div>
                <div class="company-info">
                    ${r?.company_address||`Company Address`}<br>
                    ${r?.company_city||`City`}, ${r?.company_state||`State`}<br>
                    ${r?.company_country||`Country`} - ${r?.company_zipcode||`Zipcode`}
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
                    <span>${t(new Date)}</span>
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
                ${e.items.map(e=>{let t=e.price*e.quantity,r=e.taxes&&e.taxes.length>0?e.taxes[0].rate:0,i=t*r/100;return`
                        <div class="item">
                            <div class="item-name">${e.name}</div>
                            <div class="item-details">
                                <div class="item-row">
                                    <span>Qty:</span>
                                    <span>${e.quantity}</span>
                                </div>
                                <div class="item-row">
                                    <span>Price:</span>
                                    <span>${n(e.price)}</span>
                                </div>
                                <div class="item-row">
                                    <span>Tax (${r}%):</span>
                                    <span>${n(i)}</span>
                                </div>
                                <div class="item-row" style="font-weight: bold;">
                                    <span>Subtotal:</span>
                                    <span>${n(t+i)}</span>
                                </div>
                            </div>
                        </div>
                    `}).join(``)}
            </div>
            
            <div class="separator"></div>
            
            <div class="totals">
                <div class="total-row">
                    <span>Discount:</span>
                    <span>-${n(e.discount)}</span>
                </div>
                <div class="final-total">
                    <span>TOTAL:</span>
                    <span>${n(e.total)}</span>
                </div>
            </div>
            
            <div class="separator"></div>
            
            <div class="footer">
                <div class="thank-you">*** THANK YOU ***</div>
                <div>Visit Again!</div>
            </div>
        </div>
    </body>
    </html>
    `,a=document.createElement(`iframe`);a.style.display=`none`,document.body.appendChild(a);let o=a.contentDocument||a.contentWindow?.document;o&&(o.write(i),o.close(),a.contentWindow?.focus(),a.contentWindow?.print(),setTimeout(()=>{document.body.removeChild(a)},1e3))};export{i as n,r as t};