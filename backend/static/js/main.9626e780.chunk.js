(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),o=n.n(r),s=(n(181),n(182),n(6));function i(){return Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"#",children:"ACME Corp"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})})]})})}var l=n(11),j=n(32),d=n(95),u=n(61),b=n(272),h=n(274),m=n(124),x=n(273),O=n(121),f=Object(O.b)({name:"map",initialState:{selectedState:null,selectedAircraft:null,dataLoading:null},reducers:{selectedState:function(e,t){return console.log(t,e),Object(l.a)(Object(l.a)({},e),{},{selectedState:t.payload})},clearState:function(e){return Object(l.a)(Object(l.a)({},e),{},{selectedState:null})},setAircraft:function(e,t){return Object(l.a)(Object(l.a)({},e),{},{selectedAircraft:t.payload})},clearAircraft:function(e){return Object(l.a)(Object(l.a)({},e),{},{selectedAircraft:null})}}}),p=f.actions,g=f.reducer,v=n(66),y=h.a.CheckableTag,w=function(){var e=Object(u.c)((function(e){return e.map})),t=Object(u.b)(),n=Object(a.useState)([]),c=Object(j.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(null),h=Object(j.a)(i,2),O=h[0],f=h[1],g=Object(a.useState)(!1),w=Object(j.a)(g,2),S=w[0],C=w[1],N=Object(a.useState)({coordinates:[0,0],zoom:1}),k=Object(j.a)(N,2),A=k[0],z=k[1];return Object(a.useEffect)((function(){fetch("".concat("","/all_states/")).then((function(e){return e.json()})).then((function(e){o(e)}));var e=setInterval((function(){return fetch("".concat("","/all_states/")).then((function(e){return e.json()})).then((function(e){o(e)}))}),6e4);return function(){return clearInterval(e)}}),[]),r?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d.ComposableMap,{projection:"geoAlbers",projectionConfig:{scale:100},children:Object(s.jsx)(d.ZoomableGroup,{zoom:A.zoom,center:A.coordinates,onMoveEnd:function(e){z(e)},children:Object(s.jsx)(d.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(e){return e.geographies.map((function(e){var n=e.properties,a=n.NAME,c=(n.POP_EST,{default:{fill:"#D6D6DA",outline:"none"},pressed:{fill:"#E42",outline:"none"}});return r[a]&&(c.default={fill:"#F53",outline:"none"}),Object(s.jsx)(m.a,{title:a,zIndex:1e3,children:Object(s.jsx)(d.Geography,{geography:e,style:c,onClick:function(){console.log(e);var n=e.geometry.coordinates[0];console.log(n);var c=1==n.length?n.map((function(e){return e[0][0]})):n.map((function(e){return e[0]})),o=1==n.length?n.map((function(e){return e[0][1]})):n.map((function(e){return e[1]}));r[a]&&(t(p.selectedState({name:a,lamin:v.min(o),lamax:v.max(o),lomin:v.min(c),lomax:v.max(c)})),C(!0),f({NAME:a,data:r[a]}))}},e.rsmKey)},a)}))}})})}),Object(s.jsxs)("div",{className:"controls",children:[Object(s.jsx)("button",{onClick:function(){A.zoom>=4||z((function(e){return Object(l.a)(Object(l.a)({},e),{},{zoom:2*e.zoom})}))},className:"btn btn-danger mr-1",children:Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:[Object(s.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),Object(s.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),Object(s.jsx)("button",{onClick:function(){A.zoom<=1||z((function(e){return Object(l.a)(Object(l.a)({},e),{},{zoom:e.zoom/2})}))},className:"btn btn-danger",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:Object(s.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})})]}),Object(s.jsxs)(b.a,{show:S,autoFocus:!0,onEscapeKeyDown:function(){return C(!1)},size:"lg",children:[Object(s.jsx)(b.a.Header,{children:Object(s.jsx)(b.a.Title,{children:O&&O.NAME})}),Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)("p",{className:"text-secondary",children:"Click tags for detailed aircraft tracking "}),O&&O.data.map((function(n,a){return Object(s.jsx)(y,{className:"m-1",checked:e.selectedAircraft===n.icao24,style:{cursor:"pointer",border:"1px solid gray"},onChange:function(e,a){t(e?p.setAircraft(n.icao24):p.clearAircraft())},children:n.icao24},a)}))]}),Object(s.jsx)(b.a.Footer,{children:Object(s.jsx)("button",{className:"btn btn-secondary",onClick:function(){C(!1)},children:"Close"})})]})]}):Object(s.jsx)(x.a,{avatar:!0,paragraph:{rows:4}})},S=n(271),C=[{title:"icao24",dataIndex:"icao24",key:"icao24"},{title:"callsign",dataIndex:"callsign",key:"callsign"},{title:"origin_country",dataIndex:"origin_country",key:"origin_country"}];function N(){var e=Object(u.c)((function(e){return e.map.selectedState})),t=Object(a.useState)(null),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var t="";""===t&&(t=window.origin);var n=new URL("".concat(t,"/all_states/"));e&&(n.searchParams.append("lamin",e.lamin),n.searchParams.append("lamax",e.lamax),n.searchParams.append("lomin",e.lomin),n.searchParams.append("lomax",e.lomax),fetch(n.toString()).then((function(e){return e.json()})).then((function(t){return r(t[e.name])})))}),[e]),!e||v.isEmpty(e)?Object(s.jsx)("p",{children:"No State Selected ..."}):null!=c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:["Found ",c.length," flights"]}),Object(s.jsx)(S.a,{columns:C,dataSource:c,pagination:{pageSize:5}})]}):Object(s.jsx)(x.a,{paragraph:3,avatar:!0})}n(260),n(261);var k=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{}),Object(s.jsx)("div",{className:"container-fluid w-100",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("p",{className:"text-primary text-center availability-header p-0 m-0",children:"Country AirCraft Availability"}),Object(s.jsx)("span",{className:"text-secondary text-center",children:"(click to see aircraft availability)"}),Object(s.jsx)("span",{className:"text-secondary text-center",children:"(scroll to zoom in and out)"})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(w,{})})]}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(N,{})})]})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,275)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},z=Object(O.a)({reducer:{map:g}});o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u.a,{store:z,children:Object(s.jsx)(k,{})})}),document.getElementById("root")),A()}},[[265,1,2]]]);
//# sourceMappingURL=main.9626e780.chunk.js.map