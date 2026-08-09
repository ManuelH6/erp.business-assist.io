import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{c as n,r,s as i}from"./app-BjZ3wSPy.js";import{f as a,l as o}from"./helpers-DadNihWy.js";import{t as s}from"./cookie-consent-mDEHbRbx.js";import c from"./Header-Bwjlpx4M.js";import l from"./Footer-CaGzT2ph.js";import u from"./Hero-UKGACvAq.js";import d from"./Features-Drmk089d.js";import f from"./Modules-DNlrtAfA.js";import p from"./Benefits-Du7ekO7M.js";import m from"./Gallery-C4SlX-Jm.js";import h from"./CTA-eUlSIqqR.js";var g=e(t(),1),_=r();function v({settings:e}){let{adminAllSetting:t}=n().props,r=o(`favicon`),v=r?a(r):null,y=e?.config_sections?.colors||{primary:`#10b77f`,secondary:`#022B3A`,accent:`#DDE5E9`},b=e=>{let t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,n,r)=>t+t+n+n+r+r),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},x=(e,t)=>{let n=e.replace(`#`,``),r=parseInt(n,16),i=Math.round(2.55*t),a=(r>>16)-i,o=(r>>8&255)-i,s=(r&255)-i;return a=a<0?0:a>255?255:a,o=o<0?0:o>255?255:o,s=s<0?0:s>255?255:s,`#`+(16777216+a*65536+o*256+s).toString(16).slice(1)},S=y.primary||`#10b77f`,C=y.secondary||`#022B3A`,w=y.accent||`#DDE5E9`,T=b(S)||{r:249,g:115,b:22},E=b(C)||{r:2,g:43,b:58},D=`
        :root {
            --landing-primary: ${S};
            --landing-primary-hover: ${x(S,10)};
            --landing-secondary: ${C};
            --landing-accent: ${w};
            --rgb-landing-primary: ${T.r}, ${T.g}, ${T.b};
            --rgb-landing-secondary: ${E.r}, ${E.g}, ${E.b};
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
    `,O=t=>e?.config_sections?.section_visibility?.[t]!==!1,k=e?.config_sections?.section_order||[`header`,`hero`,`stats`,`features`,`modules`,`benefits`,`gallery`,`cta`,`footer`],A=(0,g.useCallback)(t=>{if(!O(t))return null;switch(t){case`header`:return(0,_.jsx)(c,{settings:e},t);case`hero`:return(0,_.jsx)(u,{settings:e},t);case`stats`:return null;case`features`:return(0,_.jsx)(d,{settings:e},t);case`modules`:return(0,_.jsx)(f,{settings:e},t);case`benefits`:return(0,_.jsx)(p,{settings:e},t);case`gallery`:return(0,_.jsx)(m,{settings:e},t);case`cta`:return(0,_.jsx)(h,{settings:e},t);case`footer`:return(0,_.jsx)(l,{settings:e},t);default:return null}},[e,O]);return(0,_.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,_.jsxs)(i,{title:`${e?.company_name||`Assist Hub`} - All-in-One Business Management Solution`,children:[v&&(0,_.jsx)(`link`,{rel:`icon`,type:`image/x-icon`,href:v}),(0,_.jsx)(`style`,{children:D})]}),k.map(e=>A(e)),(0,_.jsx)(s,{settings:t||{}})]})}export{v as default};