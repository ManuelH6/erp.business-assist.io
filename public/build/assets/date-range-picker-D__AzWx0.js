import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-CixcLOAa.js";import{r}from"./app-BW7bkF8O.js";import{t as i}from"./utils-PYjUuRgT.js";import{t as a}from"./button-Cpxb_Mv8.js";import{t as o}from"./calendar-DsLs5sj0.js";import{t as s}from"./react-datepicker-CFpmbar3.js";import{n as c,r as l,t as u}from"./popover-D1BmNjXV.js";var d=e(t(),1),f=r();function p({value:e,onChange:t,placeholder:r,className:p,id:m,required:h}){let{t:g}=n(),[_,v]=d.useState(!1),y=e=>{if(!e)return[null,null];let[t,n]=e.split(` - `);return[t?new Date(t):null,n?new Date(n):null]},b=(e,t)=>{if(!e||!t)return``;let n={year:`numeric`,month:`short`,day:`numeric`};return`${e.toLocaleDateString(`en-US`,n)} - ${t.toLocaleDateString(`en-US`,n)}`},[x,S]=y(e);return(0,f.jsxs)(`div`,{className:i(`w-full`,p),children:[(0,f.jsxs)(u,{open:_,onOpenChange:v,children:[(0,f.jsx)(l,{asChild:!0,children:(0,f.jsxs)(a,{variant:`outline`,className:i(`w-full justify-start text-left font-normal h-10`,!e&&`text-muted-foreground`),children:[(0,f.jsx)(o,{className:`mr-2 h-4 w-4`}),e&&x&&S?b(x,S):r||g(`Select date range`)]})}),(0,f.jsx)(c,{className:`w-auto p-0`,align:`start`,children:(0,f.jsx)(`div`,{className:`date-range-wrapper`,children:(0,f.jsx)(s,{selected:x,onChange:e=>{let[n,r]=e;n&&r?(t(`${`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`} - ${`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,`0`)}-${String(r.getDate()).padStart(2,`0`)}`}`),v(!1)):t(n&&!r?`${`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`} - `:``)},startDate:x,endDate:S,selectsRange:!0,monthsShown:2,inline:!0,showPopperArrow:!1})})})]}),(0,f.jsx)(`style`,{children:`
        .date-range-wrapper .react-datepicker {
          font-family: inherit;
          border: none;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }
        .date-range-wrapper .react-datepicker__header {
          background: hsl(var(--background));
          border-bottom: 1px solid hsl(var(--border));
          border-radius: 0;
        }
        .date-range-wrapper .react-datepicker__current-month,
        .date-range-wrapper .react-datepicker__day-name {
          color: hsl(var(--foreground));
          font-weight: 500;
        }
        .date-range-wrapper .react-datepicker__day {
          color: hsl(var(--foreground));
          border-radius: 6px;
        }
        .date-range-wrapper .react-datepicker__day:hover {
          background: hsl(var(--accent));
          color: hsl(var(--accent-foreground));
        }
        .date-range-wrapper .react-datepicker__day--selected,
        .date-range-wrapper .react-datepicker__day--in-selecting-range,
        .date-range-wrapper .react-datepicker__day--in-range {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .date-range-wrapper .react-datepicker__day--range-start,
        .date-range-wrapper .react-datepicker__day--range-end {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .date-range-wrapper .react-datepicker__navigation {
          border: none;
          border-radius: 6px;
        }
        .date-range-wrapper .react-datepicker__navigation:hover {
          background: hsl(var(--accent));
        }
        .date-range-wrapper .react-datepicker__navigation-icon::before {
          border-color: hsl(var(--foreground));
        }
        .date-range-wrapper .react-datepicker__day--outside-month {
          color: hsl(var(--muted-foreground));
        }
        .date-range-wrapper .react-datepicker__day--disabled {
          color: hsl(var(--muted-foreground));
          opacity: 0.5;
        }
        .date-range-wrapper .react-datepicker__month-container {
          background: hsl(var(--background));
        }
      `})]})}export{p as t};