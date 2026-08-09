import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{t}from"./react-BQVaxoBa.js";import{t as n}from"./useTranslation-JEPHt4rq.js";import{r}from"./app-PgZjxCuT.js";import{t as i}from"./utils-PYjUuRgT.js";import{t as a}from"./button-53QVKxhP.js";import{t as o}from"./calendar-DsLs5sj0.js";import{t as s}from"./react-datepicker-zEUCTBbA.js";import{n as c,r as l,t as u}from"./popover-CZQkz36B.js";var d=e(t(),1),f=r();function p({value:e,onChange:t,placeholder:r,className:p,id:m,required:h,maxDate:g,minDate:_,showYearDropdown:v=!0,showMonthDropdown:y=!0,style:b}){let{t:x}=n(),[S,C]=d.useState(!1),w=e=>e?new Date(e):null,T=e=>e?e.toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`}):``,E=w(e);return(0,f.jsxs)(`div`,{className:i(`w-full`,p),children:[m&&(0,f.jsx)(`input`,{id:m,type:`hidden`,value:e||``,required:h}),(0,f.jsxs)(u,{open:S,onOpenChange:C,children:[(0,f.jsx)(l,{asChild:!0,children:(0,f.jsxs)(a,{variant:`outline`,className:i(`w-full justify-start text-left font-normal h-10`,!e&&`text-muted-foreground`),style:b,children:[(0,f.jsx)(o,{className:`mr-2 h-4 w-4`}),e&&E?T(E):r||x(`Select date`)]})}),(0,f.jsx)(c,{className:`w-auto p-0`,align:`start`,children:(0,f.jsx)(`div`,{className:`date-picker-wrapper`,children:(0,f.jsx)(s,{selected:E,onChange:e=>{e?(t(`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`),C(!1)):t(``)},inline:!0,showPopperArrow:!1,maxDate:g,minDate:_,showYearDropdown:v,showMonthDropdown:y,dropdownMode:`select`,yearDropdownItemNumber:100})})})]}),(0,f.jsx)(`style`,{children:`
        .date-picker-wrapper .react-datepicker {
          font-family: inherit;
          border: none;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }
        .date-picker-wrapper .react-datepicker__header {
          background: hsl(var(--background));
          border-bottom: 1px solid hsl(var(--border));
          border-radius: 0;
        }
        .date-picker-wrapper .react-datepicker__current-month,
        .date-picker-wrapper .react-datepicker__day-name {
          color: hsl(var(--foreground));
          font-weight: 500;
        }
        .date-picker-wrapper .react-datepicker__day {
          color: hsl(var(--foreground));
          border-radius: 6px;
        }
        .date-picker-wrapper .react-datepicker__day:hover {
          background: hsl(var(--accent));
          color: hsl(var(--accent-foreground));
        }
        .date-picker-wrapper .react-datepicker__day--selected {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .date-picker-wrapper .react-datepicker__navigation {
          border: none;
          border-radius: 6px;
        }
        .date-picker-wrapper .react-datepicker__navigation:hover {
          background: hsl(var(--accent));
        }
        .date-picker-wrapper .react-datepicker__navigation-icon::before {
          border-color: hsl(var(--foreground));
        }
        .date-picker-wrapper .react-datepicker__day--outside-month {
          color: hsl(var(--muted-foreground));
        }
        .date-picker-wrapper .react-datepicker__day--disabled {
          color: hsl(var(--muted-foreground));
          opacity: 0.5;
        }
        .date-picker-wrapper .react-datepicker__month-container {
          background: hsl(var(--background));
        }
        .date-picker-wrapper .react-datepicker__header__dropdown {
          display: flex;
          gap: 8px;
          justify-content: center;
          padding: 8px 0;
        }
        .date-picker-wrapper .react-datepicker__month-dropdown-container,
        .date-picker-wrapper .react-datepicker__year-dropdown-container {
          margin: 0;
        }
        .date-picker-wrapper .react-datepicker__year-select,
        .date-picker-wrapper .react-datepicker__month-select {
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          border: 1px solid hsl(var(--border));
          border-radius: 6px;
          padding: 6px 32px 6px 12px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          outline: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
          background-size: 12px;
          min-width: 80px;
        }
        .date-picker-wrapper .react-datepicker__month-select {
          min-width: 100px;
        }
        .date-picker-wrapper .react-datepicker__year-select:hover,
        .date-picker-wrapper .react-datepicker__month-select:hover {
          background-color: hsl(var(--accent));
          border-color: hsl(var(--border));
        }
        .date-picker-wrapper .react-datepicker__year-select:focus,
        .date-picker-wrapper .react-datepicker__month-select:focus {
          border-color: hsl(var(--ring));
          box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
        }
      `})]})}export{p as t};