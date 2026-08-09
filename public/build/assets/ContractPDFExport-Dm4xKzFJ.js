const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/html2pdf-BShorWMF.js","assets/rolldown-runtime-B0Z9INg1.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./useTranslation-BmLSQ6ch.js";import{r as n,t as r}from"./app-DtCcvC5J.js";import{t as i}from"./button-BVEyaquy.js";import{t as a}from"./download-3ZJNWoHz.js";import{a as o,i as s,o as c}from"./helpers-BliZB32K.js";import{i as l,n as u,t as d}from"./tooltip-B_3ddK07.js";var f=n();function p({contract:n,variant:p=`outline`,size:m=`sm`}){let{t:h}=t();return(0,f.jsxs)(d,{children:[(0,f.jsx)(l,{asChild:!0,children:(0,f.jsx)(i,{variant:p,size:m,onClick:()=>{let t=document.createElement(`div`);t.innerHTML=`
            <div style="padding: 40px; font-family: Arial, sans-serif;">
                <div style="border-bottom: 2px solid #e5e7eb; padding-bottom: 24px; margin-bottom: 32px;">
                    <h1 style="font-size: 24px; font-weight: bold; color: #111827; margin-bottom: 8px;">${n.subject}</h1>
                    <p style="color: #6b7280;">${n.contract_number}</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px;">
                    <div>
                        <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 16px;">${h(`Contract Details`)}</h3>
                        <div style="margin-bottom: 16px;">
                            <label style="font-size: 14px; font-weight: 500; color: #6b7280;">${h(`Client`)}</label>
                            <p style="font-weight: 500; color: #111827;">${n.user?.name||h(`Not Assigned`)}</p>
                        </div>
                        <div>
                            <label style="font-size: 14px; font-weight: 500; color: #6b7280;">${h(`Contract Value`)}</label>
                            <p style="font-size: 18px; font-weight: 600; color: #111827;">${n.value?s(n.value):h(`Not Set`)}</p>
                        </div>
                    </div>
                    <div>
                        <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 16px;">${h(`Timeline`)}</h3>
                        <div style="margin-bottom: 16px;">
                            <label style="font-size: 14px; font-weight: 500; color: #6b7280;">${h(`Start Date`)}</label>
                            <p style="font-weight: 500; color: #111827;">${n.start_date?o(n.start_date):h(`Not Set`)}</p>
                        </div>
                        <div>
                            <label style="font-size: 14px; font-weight: 500; color: #6b7280;">${h(`End Date`)}</label>
                            <p style="font-weight: 500; color: #111827;">${n.end_date?o(n.end_date):h(`Not Set`)}</p>
                        </div>
                    </div>
                </div>
                ${n.description?`
                    <div style="margin-bottom: 32px;">
                        <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 16px;">${h(`Terms and Conditions`)}</h3>
                        <div style="border-left: 4px solid #d1d5db; padding-left: 16px;">
                            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${n.description}</p>
                        </div>
                    </div>
                `:``}
                <div style="border-top: 1px solid #e5e7eb; padding-top: 32px;">
                    <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 24px;">${h(`Signatures`)}</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px;">
                        ${n.signatures&&n.signatures.length>0?n.signatures.map(e=>`
                                <div style="text-align: center;">
                                    <div style="border-bottom: 2px solid #9ca3af; padding-bottom: 8px; margin-bottom: 12px; height: 64px; display: flex; align-items: end; justify-content: center;">
                                        <img src="${e.signature_data}" alt="Signature" style="max-height: 48px; max-width: 100%; object-fit: contain;" />
                                    </div>
                                    <p style="font-weight: 500; color: #111827;">${e.user.name}</p>
                                    <p style="font-size: 14px; color: #6b7280;">${c(e.signed_at)}</p>
                                </div>
                            `).join(``):`<div style="text-align: center;">
                                <div style="border-bottom: 2px solid #d1d5db; padding-bottom: 8px; margin-bottom: 12px; height: 64px;"></div>
                                <p style="font-weight: 500; color: #111827;">${h(`Client Signature`)}</p>
                                <p style="font-size: 14px; color: #6b7280;">${h(`Date`)}: _______________</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="border-bottom: 2px solid #d1d5db; padding-bottom: 8px; margin-bottom: 12px; height: 64px;"></div>
                                <p style="font-weight: 500; color: #111827;">${h(`Company Representative`)}</p>
                                <p style="font-size: 14px; color: #6b7280;">${h(`Date`)}: _______________</p>
                            </div>`}
                    </div>
                </div>
                <div style="text-align: center; font-size: 12px; color: #9ca3af; padding-top: 32px; margin-top: 32px; border-top: 1px solid #e5e7eb;">
                    <p>${h(`Generated on`)} ${c(n.created_at)} • ${n.contract_number}</p>
                </div>
            </div>
        `;let i={margin:.5,filename:`contract-${n.contract_number}.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{unit:`in`,format:`letter`,orientation:`portrait`}};r(()=>import(`./html2pdf-BShorWMF.js`).then(t=>e(t.t(),1)).then(e=>{e.default().set(i).from(t).save()}),__vite__mapDeps([0,1]))},children:(0,f.jsx)(a,{className:`h-4 w-4`})})}),(0,f.jsx)(u,{children:(0,f.jsx)(`p`,{children:h(`Download PDF`)})})]})}export{p as default};