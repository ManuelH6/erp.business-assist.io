import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-C0iIS_rx.js";import{r}from"./app-BujDEe4w.js";import{t as i}from"./utils-PYjUuRgT.js";import{t as a}from"./button-Cr_tXiOH.js";import{t as o}from"./calendar-DsLs5sj0.js";import{t as s}from"./react-datepicker-BURPvFbD.js";import{n as c,r as l,t as u}from"./popover-CCPAB6CC.js";var d=e(t(),1),f=r();function p({value:e,onChange:t,placeholder:r,className:p,id:m,required:h,timeFormat:g=`HH:mm`,dateFormat:_=`MMM d, yyyy h:mm aa`,mode:v=`range`}){let{t:y}=n(),[b,x]=d.useState(!1),[S,C]=d.useState(null),[w,T]=d.useState(null);d.useEffect(()=>{if(e){if(v===`single`)C(new Date(e.replace(` `,`T`))),T(null);else{let[t,n]=e.split(` - `);C(t?new Date(t.replace(` `,`T`)):null),T(n?new Date(n.replace(` `,`T`)):null)}}else C(null),T(null)},[e,v]);let E=(e,t)=>{let n={year:`numeric`,month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`};return v===`single`?e?e.toLocaleDateString(`en-US`,n):``:!e||!t?``:`${e.toLocaleDateString(`en-US`,n)} - ${t.toLocaleDateString(`en-US`,n)}`},D=e=>`${`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`} ${`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`}`,O=e=>{e&&(C(e),v===`single`?(t(D(e)),x(!1)):t(w?`${D(e)} - ${D(w)}`:`${D(e)} - `))};return(0,f.jsxs)(`div`,{className:i(`w-full`,p),onWheel:e=>{b||e.stopPropagation()},children:[(0,f.jsxs)(u,{open:b,onOpenChange:x,modal:!1,children:[(0,f.jsx)(l,{asChild:!0,children:(0,f.jsxs)(a,{variant:`outline`,className:i(`w-full justify-start text-left font-normal h-10`,!e&&`text-muted-foreground`),children:[(0,f.jsx)(o,{className:`mr-2 h-4 w-4`}),e&&S&&(v===`single`||w)?E(S,w):r||y(v===`single`?`Select date time`:`Select date time range`)]})}),(0,f.jsx)(c,{className:`w-auto p-0`,align:`start`,onWheel:e=>{e.stopPropagation()},children:(0,f.jsx)(`div`,{className:`datetime-range-wrapper`,children:v===`single`?(0,f.jsxs)(`div`,{className:`p-3`,children:[(0,f.jsx)(`div`,{className:`text-sm font-medium mb-2 text-center`,children:y(`Select Date & Time`)}),(0,f.jsx)(s,{selected:S,onChange:O,showTimeSelect:!0,timeFormat:g,timeIntervals:15,timeCaption:`Time`,dateFormat:_,inline:!0})]}):(0,f.jsxs)(`div`,{className:`flex`,children:[(0,f.jsxs)(`div`,{className:`p-3 border-r border-border`,children:[(0,f.jsx)(`div`,{className:`text-sm font-medium mb-2 text-center`,children:y(`Start Date & Time`)}),(0,f.jsx)(s,{selected:S,onChange:O,showTimeSelect:!0,timeFormat:g,timeIntervals:15,timeCaption:`Time`,dateFormat:_,inline:!0,maxDate:w||void 0})]}),(0,f.jsxs)(`div`,{className:`p-3`,children:[(0,f.jsx)(`div`,{className:`text-sm font-medium mb-2 text-center`,children:y(`End Date & Time`)}),(0,f.jsx)(s,{selected:w,onChange:e=>{e&&S&&(T(e),t(`${D(S)} - ${D(e)}`),x(!1))},showTimeSelect:!0,timeFormat:g,timeIntervals:15,timeCaption:`Time`,dateFormat:_,inline:!0,minDate:S||void 0})]})]})})})]}),(0,f.jsx)(`style`,{children:`
        .datetime-range-wrapper .react-datepicker {
          font-family: inherit;
          border: none;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }
        .datetime-range-wrapper .react-datepicker__header {
          background: hsl(var(--background));
          border-bottom: 1px solid hsl(var(--border));
          border-radius: 0;
        }
        .datetime-range-wrapper .react-datepicker__current-month,
        .datetime-range-wrapper .react-datepicker__day-name {
          color: hsl(var(--foreground));
          font-weight: 500;
        }
        .datetime-range-wrapper .react-datepicker__day {
          color: hsl(var(--foreground));
          border-radius: 6px;
        }
        .datetime-range-wrapper .react-datepicker__day:hover {
          background: hsl(var(--accent));
          color: hsl(var(--accent-foreground));
        }
        .datetime-range-wrapper .react-datepicker__day--selected {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .datetime-range-wrapper .react-datepicker__navigation {
          border: none;
          border-radius: 6px;
        }
        .datetime-range-wrapper .react-datepicker__navigation:hover {
          background: hsl(var(--accent));
        }
        .datetime-range-wrapper .react-datepicker__navigation-icon::before {
          border-color: hsl(var(--foreground));
        }
        .datetime-range-wrapper .react-datepicker__day--outside-month {
          color: hsl(var(--muted-foreground));
        }
        .datetime-range-wrapper .react-datepicker__day--disabled {
          color: hsl(var(--muted-foreground));
          opacity: 0.5;
        }
        .datetime-range-wrapper .react-datepicker__time-container {
          background: hsl(var(--background));
          border-left: 1px solid hsl(var(--border));
        }
        .datetime-range-wrapper .react-datepicker__time {
          background: hsl(var(--background));
        }
        .datetime-range-wrapper .react-datepicker__time-box {
          background: hsl(var(--background));
        }
        .datetime-range-wrapper .react-datepicker__time-list-item {
          color: hsl(var(--foreground));
        }
        .datetime-range-wrapper .react-datepicker__time-list-item:hover {
          background: hsl(var(--accent));
        }
        .datetime-range-wrapper .react-datepicker__time-list-item--selected {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .datetime-range-wrapper .react-datepicker__time-name {
          color: hsl(var(--foreground));
        }
      `})]})}export{p as t};