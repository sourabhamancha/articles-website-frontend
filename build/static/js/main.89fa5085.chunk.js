(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{169:function(e,t,n){},299:function(e,t,n){e.exports=n(490)},490:function(e,t,n){"use strict";n.r(t);var a=n(74),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(0),c=n.n(o),l=n(37),s=n(21),m=n(30),i=n(32),u=n(289),d=n(19),p=n(504),b=n(509),E=n(33),g=n.n(E),f=n(135),v=n(64),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.useState)(t),a=Object(d.a)(n,2),r=a[0],c=a[1],l=function(e){c(Object(v.a)(Object(v.a)({},r),{},Object(f.a)({},e.target.name,e.target.value)))},s=function(t){t.preventDefault(),e()};return{onChange:l,onSubmit:s,values:r}};function j(){var e=Object(i.a)(["\n  {\n    getPosts {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]);return j=function(){return e},e}var O=g()(j());function y(){var e=Object(i.a)(["\n  mutation createPost($body: String!) {\n    createPost(body: $body) {\n      id\n      body\n      createdAt\n      username\n      likes {\n        id\n        username\n        createdAt\n      }\n      likeCount\n      comments {\n        id\n        body\n        username\n        createdAt\n      }\n      commentCount\n    }\n  }\n"]);return y=function(){return e},e}var C=g()(y()),w=function(){var e=h((function(){l()}),{body:""}),t=e.values,n=e.onChange,a=e.onSubmit,r=Object(m.a)(C,{variables:t,update:function(e,n){var a=e.readQuery({query:O});a.getPosts=[n.data.createPost].concat(Object(u.a)(a.getPosts)),e.writeQuery({query:O,data:a}),t.body=""}}),o=Object(d.a)(r,2),l=o[0],s=o[1].error;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{onSubmit:a},c.a.createElement("h2",null,"Post your article:"),c.a.createElement(p.a.Field,null,c.a.createElement(p.a.Input,{placeholder:"Type here...",name:"body",onChange:n,value:t.body,error:!!s}),c.a.createElement(b.a,{type:"submit",color:"green"},"Submit"))),s&&c.a.createElement("div",{className:"ui error message",style:{marginBottom:20}},c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,s.graphQLErrors[0].message))))},I=n(508),k=n(287),P=n(89),S=n(139),$=n(105),x=n.n($),N=n(269),A=n.n(N),D={user:null};if(localStorage.getItem("jwtToken")){var L=A()(localStorage.getItem("jwtToken"));1e3*L.exp<Date.now()?localStorage.removeItem("jwtToken"):D.user=L}var T=Object(o.createContext)({user:null,login:function(e){},logout:function(){}});function R(e,t){switch(t.type){case"LOGIN":return Object(v.a)(Object(v.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(v.a)(Object(v.a)({},e),{},{user:null});default:return e}}function Q(e){var t=Object(o.useReducer)(R,D),n=Object(d.a)(t,2),a=n[0],r=n[1];return c.a.createElement(T.Provider,Object.assign({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),r({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),r({type:"LOGOUT"})}}},e))}var U=n(507);var q=function(e){var t=e.content,n=e.children;return c.a.createElement(U.a,{inverted:!0,content:t,trigger:n})};function z(){var e=Object(i.a)(["\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId) {\n      id\n      likes {\n        id\n        username\n      }\n      likeCount\n    }\n  }\n"]);return z=function(){return e},e}var B=g()(z()),G=function(e){var t=e.user,n=e.post,a=n.id,r=n.likeCount,s=n.likes,i=Object(o.useState)(!1),u=Object(d.a)(i,2),p=u[0],E=u[1];Object(o.useEffect)((function(){t&&s.find((function(e){return e.username===t.username}))?E(!0):E(!1)}),[t,s]);var g=Object(m.a)(B,{onError:function(e){console.log(e)},variables:{postId:a}}),f=Object(d.a)(g,2),v=f[0],h=(f[1].error,t?p?c.a.createElement(b.a,{color:"green"},c.a.createElement(P.a,{name:"thumbs up outline"})):c.a.createElement(b.a,{color:"green",basic:!0},c.a.createElement(P.a,{name:"thumbs up outline"})):c.a.createElement(b.a,{as:l.b,to:"/login",color:"green",basic:!0},c.a.createElement(P.a,{name:"thumbs up outline"})));return c.a.createElement(b.a,{as:"div",labelPosition:"right",onClick:v},c.a.createElement(q,{content:p?"Unlike":"Like"},h),c.a.createElement(S.a,{basic:!0,color:"green",pointing:"left"},r))},M=n(505);function F(){var e=Object(i.a)(["\n  mutation deleteComment($postId: ID!, $commentId: ID!) {\n    deleteComment(postId: $postId, commentId: $commentId) {\n      id\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n      commentCount\n    }\n  }\n"]);return F=function(){return e},e}function H(){var e=Object(i.a)(["\n  mutation deletePost($postId: ID!) {\n    deletePost(postId: $postId)\n  }\n"]);return H=function(){return e},e}var J=g()(H()),V=g()(F()),W=function(e){var t=e.postId,n=e.commentId,a=e.callback,r=Object(o.useState)(!1),l=Object(d.a)(r,2),s=l[0],i=l[1],u=n?V:J,p=Object(m.a)(u,{update:function(e){if(i(!1),!n){var r=e.readQuery({query:O});r.getPosts=r.getPosts.filter((function(e){return e.id!==t})),e.writeQuery({query:O,data:r})}a&&a()},variables:{postId:t,commentId:n}}),E=Object(d.a)(p,1)[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement(q,{content:n?"Delete comment":"Delete post"},c.a.createElement(b.a,{as:"div",color:"red",floated:"right",onClick:function(){return i(!0)}},c.a.createElement(P.a,{name:"trash",style:{margin:0}}))),c.a.createElement(M.a,{open:s,onCancel:function(){return i(!1)},onConfirm:E}))};var K=function(e){var t=e.post,n=t.body,a=t.createdAt,r=t.id,s=t.username,m=t.likeCount,i=t.commentCount,u=t.likes,d=Object(o.useContext)(T).user;return c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{fluid:!0},c.a.createElement(I.a.Content,{as:l.b,to:"/posts/".concat(r)},c.a.createElement(k.a,{floated:"right",size:"tiny",src:"https://react.semantic-ui.com/images/avatar/large/elyse.png"}),c.a.createElement(I.a.Header,null,s),c.a.createElement(I.a.Meta,null,x()(a).fromNow(!0)),c.a.createElement(I.a.Description,null,n)),c.a.createElement(I.a.Content,{extra:!0},c.a.createElement(G,{user:d,post:{id:r,likes:u,likeCount:m}}),c.a.createElement(q,{content:"Comment on post"},c.a.createElement(b.a,{labelPosition:"right",as:l.b,to:"/posts/".concat(r)},c.a.createElement(b.a,{color:"blue",basic:!0},c.a.createElement(P.a,{name:"comments"})),c.a.createElement(S.a,{basic:!0,color:"blue",pointing:"left"},i))),d&&d.username===s&&c.a.createElement(W,{postId:r}))))},X=n(511),Y=n(513);n(169);var Z=function(){var e=Object(o.useContext)(T).user,t=Object(m.b)(O),n=t.loading,a=t.data;return c.a.createElement(X.a,{columns:3},c.a.createElement(X.a.Row,{className:"page-title"},c.a.createElement("h1",null,"Recent Articles")),c.a.createElement(X.a.Row,null,e&&c.a.createElement(X.a.Column,null,c.a.createElement(w,null)),n?c.a.createElement("h1",null,"Loading posts..."):c.a.createElement(Y.a.Group,{duration:1e3},a.getPosts&&a.getPosts.map((function(e){return c.a.createElement(X.a.Column,{key:e.id,style:{marginBottom:30}},c.a.createElement(K,{post:e}))})))))};function _(){var e=Object(i.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]);return _=function(){return e},e}var ee=g()(_()),te=function(e){var t=Object(o.useContext)(T),n=Object(o.useState)({}),a=Object(d.a)(n,2),r=a[0],l=a[1],s=h((function(){v()}),{username:"",password:""}),i=s.onChange,u=s.onSubmit,E=s.values,g=Object(m.a)(ee,{update:function(n,a){t.login(a.data.login),e.history.push("/")},onError:function(e){l(e.graphQLErrors[0].extensions.exception.errors)},variables:E}),f=Object(d.a)(g,2),v=f[0],j=f[1].loading;return c.a.createElement("div",{className:"form-container"},c.a.createElement(p.a,{onSubmit:u,noValidate:!0,className:j?"loading":""},c.a.createElement("h1",null,"Login"),c.a.createElement(p.a.Input,{label:"Username",placeholder:"Username..",name:"username",type:"text",value:E.username,error:!!r.username,onChange:i}),c.a.createElement(p.a.Input,{label:"Password",placeholder:"Password..",name:"password",type:"password",value:E.password,error:!!r.password,onChange:i}),c.a.createElement(b.a,{type:"submit",primary:!0},"Login")),Object.keys(r).length>0&&c.a.createElement("div",{className:"ui error message"},c.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return c.a.createElement("li",{key:e},e)})))))};function ne(){var e=Object(i.a)(["\n  mutation register(\n    $username: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    register(\n      registerInput: {\n        username: $username\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]);return ne=function(){return e},e}var ae=g()(ne()),re=function(e){var t=Object(o.useContext)(T),n=Object(o.useState)({}),a=Object(d.a)(n,2),r=a[0],l=a[1],s=h((function(){v()}),{username:"",email:"",password:"",confirmPassword:""}),i=s.onChange,u=s.onSubmit,E=s.values,g=Object(m.a)(ae,{update:function(n,a){var r=a.data.register;t.login(r),e.history.push("/")},onError:function(e){l(e.graphQLErrors[0].extensions.exception.errors)},variables:E}),f=Object(d.a)(g,2),v=f[0],j=f[1].loading;return c.a.createElement("div",{className:"form-container"},c.a.createElement(p.a,{onSubmit:u,noValidate:!0,className:j?"loading":""},c.a.createElement("h1",null,"Register"),c.a.createElement(p.a.Input,{label:"Username",placeholder:"Username..",name:"username",type:"text",value:E.username,error:!!r.username,onChange:i}),c.a.createElement(p.a.Input,{label:"Email",placeholder:"Email..",name:"email",type:"email",value:E.email,error:!!r.email,onChange:i}),c.a.createElement(p.a.Input,{label:"Password",placeholder:"Password..",name:"password",type:"password",value:E.password,error:!!r.password,onChange:i}),c.a.createElement(p.a.Input,{label:"Confirm Password",placeholder:"Confirm Password..",name:"confirmPassword",type:"password",value:E.confirmPassword,error:!!r.confirmPassword,onChange:i}),c.a.createElement(b.a,{type:"submit",primary:!0},"Register")),Object.keys(r).length>0&&c.a.createElement("div",{className:"ui error message"},c.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return c.a.createElement("li",{key:e},e)})))))},oe=n(510);var ce=function(){var e=Object(o.useContext)(T),t=e.user,n=e.logout,a=window.location.pathname,r="/"===a?"home":a.substring(1),s=Object(o.useState)(r),m=Object(d.a)(s,2),i=m[0],u=m[1],p=function(e,t){var n=t.name;return u(n)};return t?c.a.createElement(oe.a,{pointing:!0,secondary:!0,size:"massive",color:"green"},c.a.createElement(oe.a.Item,{name:t.username,active:!0,as:l.b,to:"/"}),c.a.createElement(oe.a.Menu,{position:"right"},c.a.createElement(oe.a.Item,{name:"logout",onClick:n}))):c.a.createElement(oe.a,{pointing:!0,secondary:!0,size:"massive",color:"green"},c.a.createElement(oe.a.Item,{name:"home",active:"home"===i,onClick:p,as:l.b,to:"/"}),c.a.createElement(oe.a.Menu,{position:"right"},c.a.createElement(oe.a.Item,{name:"login",active:"login"===i,onClick:p,as:l.b,to:"/login"}),c.a.createElement(oe.a.Item,{name:"register",active:"register"===i,onClick:p,as:l.b,to:"/register"})))};function le(){var e=Object(i.a)(["\n  query($postId: ID!) {\n    getPost(postId: $postId) {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]);return le=function(){return e},e}function se(){var e=Object(i.a)(["\n  mutation($postId: String!, $body: String!) {\n    createComment(postId: $postId, body: $body) {\n      id\n      comments {\n        id\n        body\n        createdAt\n        username\n      }\n      commentCount\n    }\n  }\n"]);return se=function(){return e},e}var me=g()(se()),ie=g()(le()),ue=function(e){var t,n=e.match.params.postId,a=Object(o.useContext)(T).user,r=Object(o.useRef)(null),l=Object(o.useState)(""),s=Object(d.a)(l,2),i=s[0],u=s[1],E=Object(m.b)(ie,{variables:{postId:n}}).data,g=void 0===E?{}:E,f=Object(m.a)(me,{update:function(){u(""),r.current.blur()},variables:{postId:n,body:i}}),v=Object(d.a)(f,1)[0];if(g&&!g.getPost)t=c.a.createElement("p",null,"Loading post..");else{var h=g.getPost,j=h.id,O=h.body,y=h.createdAt,C=h.username,w=h.comments,$=h.likes,N=h.likeCount,A=h.commentCount;t=c.a.createElement(X.a,null,c.a.createElement(X.a.Row,null,c.a.createElement(X.a.Column,{width:2},c.a.createElement(k.a,{src:"https://react.semantic-ui.com/images/avatar/large/elyse.png",size:"small",float:"right"})),c.a.createElement(X.a.Column,{width:10},c.a.createElement(I.a,{fluid:!0},c.a.createElement(I.a.Content,null,c.a.createElement(I.a.Header,null,C),c.a.createElement(I.a.Meta,null,x()(y).fromNow()),c.a.createElement(I.a.Description,null,O)),c.a.createElement("hr",null),c.a.createElement(I.a.Content,{extra:!0},c.a.createElement(G,{user:a,post:{id:j,likeCount:N,likes:$}}),c.a.createElement(q,{content:"Comment on post"},c.a.createElement(b.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("Comment on post")}},c.a.createElement(b.a,{basic:!0,color:"blue"},c.a.createElement(P.a,{name:"comments"})),c.a.createElement(S.a,{basic:!0,color:"blue",pointing:"left"},A))),a&&a.username===C&&c.a.createElement(W,{postId:j,callback:function(){e.history.push("/")}}))),a&&c.a.createElement(I.a,{fluid:!0},c.a.createElement(I.a.Content,null,c.a.createElement("p",null,"Post a comment"),c.a.createElement(p.a,null,c.a.createElement("div",{className:"ui action input fluid"},c.a.createElement("input",{type:"text",placeholder:"Comment..",name:"comment",value:i,onChange:function(e){return u(e.target.value)},ref:r}),c.a.createElement("button",{type:"submit",className:"ui button teal",disabled:""===i.trim(),onClick:v},"Submit"))))),w.map((function(e){return c.a.createElement(I.a,{fluid:!0,key:e.id},c.a.createElement(I.a.Content,null,a&&a.username===e.username&&c.a.createElement(W,{postId:j,commentId:e.id}),c.a.createElement(I.a.Header,null,e.username),c.a.createElement(I.a.Meta,null,x()(e.createdAt).fromNow()),c.a.createElement(I.a.Description,null,e.body)))})))))}return t},de=n(291);var pe=function(e){var t=e.component,n=Object(de.a)(e,["component"]),a=Object(o.useContext)(T).user;return c.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?c.a.createElement(s.a,{to:"/"}):c.a.createElement(t,e)}}))},be=n(503);n(489);var Ee=function(){return c.a.createElement(Q,null,c.a.createElement(l.a,null,c.a.createElement(be.a,null,c.a.createElement(ce,null),c.a.createElement(s.b,{exact:!0,path:"/",component:Z}),c.a.createElement(pe,{exact:!0,path:"/login",component:te}),c.a.createElement(pe,{exact:!0,path:"/register",component:re}),c.a.createElement(s.b,{exact:!0,path:"/posts/:postId",component:ue}))))},ge=n(65),fe=n(288),ve=n(290),he=n(27),je=n(286),Oe=Object(ve.a)({uri:"http://localhost:5000"}),ye=Object(je.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),Ce=new ge.c({link:ye.concat(Oe),cache:new fe.a}),we=c.a.createElement(he.a,{client:Ce},c.a.createElement(Ee,null));r.a.render(we,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[299,1,2]]]);
//# sourceMappingURL=main.89fa5085.chunk.js.map