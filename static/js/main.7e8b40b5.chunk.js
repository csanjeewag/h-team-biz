(this["webpackJsonpreact-complete-project"]=this["webpackJsonpreact-complete-project"]||[]).push([[0],{16:function(e,t,a){},25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),l=a.n(c),r=(a(30),a(1)),s=a(7),i=a(18),m=a(19),u=a(23),h=a(20),v=a(24),f=a(9),d=a(21),E=a.n(d);a(16);function p(e){return new Promise((function(t,a){f.getContext((function(n){(function(e,t){var a=e.tid,n=(t=t,["https://graph.microsoft.com/User.Read"]);return new Promise((function(e,o){var c="https://login.microsoftonline.com/"+a+"/oauth2/v2.0/token",l={client_id:"630f584b-b191-409e-a327-e0d185632359",client_secret:"91M_kPSR6h4-jhGl7disIg_bwhNcBXvAS~",grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:t,requested_token_use:"on_behalf_of",scope:n.join(" ")};fetch(c,{method:"POST",body:E.a.stringify(l),headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){200!==t.status?t.json().then((function(e){o({error:e.error})})):t.json().then((function(t){e(t.access_token)}))}))}))})(n,e).then((function(e){if(e.ok)return e.json();a(e.error)})).then((function(e){e.error?a(e.error):t(e)}))}))}))}var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={client_token:"client token",server_token:"server token",profile:{},theme:"theme"},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.initialize(),f.getContext((function(e){e&&e.theme?(console.log(e),this.setState({theme:e.theme})):console.log("no theme")})),new Promise((function(e,t){console.log("1. Get auth token from Microsoft Teams"),f.authentication.getAuthToken({successCallback:function(t){e(t)},failureCallback:function(e){t("Error getting token: "+e),console.log("Error getting token")}})})).then((function(t){return e.setState((function(e,a){return{client_token:t}})),p(t)})).then((function(t){return console.log(t),e.setState((function(e,a){return{server_token:t}})),fetch("https://graph.microsoft.com/v1.0/me/",{method:"GET",headers:{accept:"application/json",authorization:"bearer "+t},mode:"cors",cache:"default"}).then((function(e){if(e.ok)return e.json();throw"Error ".concat(e.status,": ").concat(e.statusText)})).then((function(e){return e}))})).then((function(t){console.log(t),e.setState((function(e,a){return{profile:t}}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("h5",{className:"text-left"},"Demo 2 tokens")),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-3"},"Theme"),o.a.createElement("div",{className:"col-sm-9"},this.state.theme)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-3"},"client token"),o.a.createElement("div",{className:"col-sm-9"},this.state.client_token)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-3"},"server token"),o.a.createElement("div",{className:"col-sm-9"},this.state.server_token)),o.a.createElement("br",null),o.a.createElement("div",{className:"container"},o.a.createElement("h5",{className:"text-left"},"Profile")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("p",null,"Name:"),o.a.createElement("p",null,"Email:"),o.a.createElement("p",null,"id:")),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("p",null,this.state.profile.displayName),o.a.createElement("p",null,this.state.profile.mail),o.a.createElement("p",null,this.state.profile.id)))))}}]),t}(o.a.Component);function g(){var e=Object(r.f)().slug;return o.a.createElement("div",null,"Now showing post ",e)}var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Hsenid Biz"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link",to:"/React-h-biz"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link",to:"/React-h-biz/ssoDemo"},"ssoDemo")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link",to:"/config/:slug"},"Config")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true"},"Disabled")))))),o.a.createElement(r.c,null,o.a.createElement(r.a,{exact:!0,path:"/React-h-biz"},o.a.createElement(b,null)),o.a.createElement(r.a,{exact:!0,path:"/React-h-biz/ssoDemo"},o.a.createElement(b,null)),o.a.createElement(r.a,{path:"config/:slug"},o.a.createElement(g,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.7e8b40b5.chunk.js.map