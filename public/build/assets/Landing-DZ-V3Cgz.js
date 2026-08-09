import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{c as n,r,s as i}from"./app-DtCcvC5J.js";import{f as a,l as o}from"./helpers-BliZB32K.js";import{t as s}from"./cookie-consent-d-0El1Bf.js";import c from"./Header-CgoEcWul.js";import l from"./Footer-05kpxBkT.js";import u from"./Hero-DUSHhEko.js";import d from"./Stats-jaob0nMQ.js";import f from"./Features-CzXLO-6N.js";import p from"./Modules-MUSTm727.js";import m from"./Benefits-DSzEqI_O.js";import h from"./Gallery-lIlZaYPX.js";import g from"./CTA-DPSQjHUg.js";var _=e(t(),1),v=r();function y({settings:e}){let{adminAllSetting:t}=n().props,r=o(`favicon`),y=r?a(r):null,b=e?.config_sections?.colors||{primary:`#10b77f`,secondary:`#022B3A`,accent:`#DDE5E9`},x=e=>{let t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,n,r)=>t+t+n+n+r+r),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},S=(e,t)=>{let n=e.replace(`#`,``),r=parseInt(n,16),i=Math.round(2.55*t),a=(r>>16)-i,o=(r>>8&255)-i,s=(r&255)-i;return a=a<0?0:a>255?255:a,o=o<0?0:o>255?255:o,s=s<0?0:s>255?255:s,`#`+(16777216+a*65536+o*256+s).toString(16).slice(1)},C=b.primary||`#10b77f`,w=b.secondary||`#022B3A`,T=b.accent||`#DDE5E9`,E=x(C)||{r:249,g:115,b:22},D=x(w)||{r:2,g:43,b:58},O=`
        :root {
            --landing-primary: ${C};
            --landing-primary-hover: ${S(C,10)};
            --landing-secondary: ${w};
            --landing-accent: ${T};
            --rgb-landing-primary: ${E.r}, ${E.g}, ${E.b};
            --rgb-landing-secondary: ${D.r}, ${D.g}, ${D.b};
        }

        .bg-\\[\\#10b77f\\] {
            background-color: var(--landing-primary) !important;
        }
        .text-\\[\\#10b77f\\] {
            color: var(--landing-primary) !important;
        }
        .hover\\:bg-\\[\\#ea580c\\]:hover {
            background-color: var(--landing-primary-hover) !important;
        }
        .hover\\:border-\\[\\#10b77f\\]:hover {
            border-color: var(--landing-primary) !important;
        }
        .group-hover\\:bg-\\[\\#10b77f\\]:hover, .group:hover .group-hover\\:bg-\\[\\#10b77f\\] {
            background-color: var(--landing-primary) !important;
        }
        .group-hover\\:border-\\[\\#10b77f\\]:hover, .group:hover .group-hover\\:border-\\[\\#10b77f\\] {
            border-color: var(--landing-primary) !important;
        }
        .group-hover\\:text-\\[\\#10b77f\\]:hover, .group:hover .group-hover\\:text-\\[\\#10b77f\\] {
            color: var(--landing-primary) !important;
        }
        .hover\\:text-\\[\\#10b77f\\]:hover {
            color: var(--landing-primary) !important;
        }

        .bg-\\[\\#022B3A\\] {
            background-color: var(--landing-secondary) !important;
        }
        .text-\\[\\#022B3A\\] {
            color: var(--landing-secondary) !important;
        }

        .from-\\[\\#10b77f\\] {
            --tw-gradient-from: var(--landing-primary) !important;
            --tw-gradient-to: var(--landing-primary) !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        .to-amber-500 {
            --tw-gradient-to: var(--landing-accent) !important;
        }

        .shadow-\\[0_0_20px_rgba\\(249\\,115\\,22\\,0\\.3\\)\\] {
            box-shadow: 0 0 20px rgba(var(--rgb-landing-primary), 0.3) !important;
        }
        .hover\\:shadow-\\[0_0_30px_rgba\\(249\\,115\\,22\\,0\\.5\\)\\]:hover {
            box-shadow: 0 0 30px rgba(var(--rgb-landing-primary), 0.5) !important;
        }
        .bg-\\[\\#10b77f\\]\\/20 {
            background-color: rgba(var(--rgb-landing-primary), 0.2) !important;
        }
        .bg-\\[\\#10b77f\\]\\/5 {
            background-color: rgba(var(--rgb-landing-primary), 0.05) !important;
        }
        .bg-gradient-to-t.from-\\[\\#10b77f\\]\\/20 {
            --tw-gradient-from: rgba(var(--rgb-landing-primary), 0.2) !important;
            --tw-gradient-to: transparent !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
    `,k=t=>e?.config_sections?.section_visibility?.[t]!==!1,A=e?.config_sections?.section_order||[`header`,`hero`,`stats`,`features`,`modules`,`benefits`,`gallery`,`cta`,`footer`],j=(0,_.useCallback)(t=>{if(!k(t))return null;switch(t){case`header`:return(0,v.jsx)(c,{settings:e},t);case`hero`:return(0,v.jsx)(u,{settings:e},t);case`stats`:return(0,v.jsx)(d,{settings:e},t);case`features`:return(0,v.jsx)(f,{},t);case`modules`:return(0,v.jsx)(p,{},t);case`benefits`:return(0,v.jsx)(m,{},t);case`gallery`:return(0,v.jsx)(h,{settings:e},t);case`cta`:return(0,v.jsx)(g,{},t);case`footer`:return(0,v.jsx)(l,{settings:e},t);default:return null}},[e,k]);return(0,v.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,v.jsxs)(i,{title:`${e?.company_name||`Assist Hub`} - All-in-One Business Management Solution`,children:[y&&(0,v.jsx)(`link`,{rel:`icon`,type:`image/x-icon`,href:y}),(0,v.jsx)(`style`,{children:O})]}),A.map(e=>j(e)),(0,v.jsx)(s,{settings:t||{}})]})}export{y as default};