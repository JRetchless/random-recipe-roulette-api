(this["webpackJsonprandom-recipe-roulette"]=this["webpackJsonprandom-recipe-roulette"]||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),s=a.n(r),c=a(7),l=a(3),o=a(4),u=a(6),m=a(5),p=a(1),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return this.state.hasError?i.a.createElement("h2",null,this.props.errorMessage):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),a}(i.a.Component),h=a(22),g=a(8),N=i.a.createContext({user:{},setUser:function(){},ingredients:[],setIngredients:function(){}}),b="https://still-woodland-16107.herokuapp.com",v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a,n=new FormData(e.target),i={},r=Object(h.a)(n.entries());try{for(r.s();!(a=r.n()).done;){var s=a.value;i[s[0]]=s[1]}}catch(c){r.e(c)}finally{r.f()}fetch("".concat(b,"/api/users"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){e.json()})).then((function(e){e&&e.hasOwnProperty("id")?(t.context.setUser({id:e.id}),t.props.history.push("/login")):alert("This email address is already being used by another account")}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"SignUp_container"},i.a.createElement("form",{onSubmit:this.handleSubmit,className:"SignUp_form"},i.a.createElement("h2",{className:"SignUp_header"},"Create Account"),i.a.createElement("label",{htmlFor:"firstname",className:"SignUp_label"},"First Name*"),i.a.createElement("input",{type:"text",id:"firstname",name:"firstname",className:"SignUp_input",required:!0}),i.a.createElement("label",{htmlFor:"lastname",className:"SignUp_label"},"Last Name*"),i.a.createElement("input",{type:"text",id:"lastname",name:"lastname",className:"SignUp_input",required:!0}),i.a.createElement("label",{htmlFor:"email",className:"SignUp_label"},"Email*"),i.a.createElement("input",{type:"text",id:"email",name:"email",className:"SignUp_input",required:!0}),i.a.createElement("label",{htmlFor:"p_word",id:"p_word",name:"p_word",className:"SignUp_label"},"Password*"),i.a.createElement("input",{type:"password",id:"p_word",name:"p_word",className:"SignUp_input",required:!0}),i.a.createElement("div",{className:"SignUp_button_container"},i.a.createElement("button",{name:"signup",className:"SignUp_button"}," Create Account  "),i.a.createElement(c.b,{className:"button back",to:"/login"},"Go Back"))))}}]),a}(i.a.Component);v.contextType=N;var f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"test@test.test",p_word:"test"},n.handlePassword=n.handlePassword.bind(Object(g.a)(n)),n.handleEmail=n.handleEmail.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"handlePassword",value:function(e){this.setState({p_word:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"fetchUser",value:function(e){return fetch("".concat(b,"/api/users/")+e,{method:"GET",headers:{"Content-Type":"application/json"}}).catch((function(e){})).then((function(e){return e.json()}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;fetch("".concat(b,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){if(e&&e.hasOwnProperty("id"))return e.id;throw new Error("Something went wrong")})).then((function(e){return t.fetchUser(e)})).then((function(e){e.hasOwnProperty("id")&&(t.context.setUser(e),t.props.history.push("/"))}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Login_container"},i.a.createElement("header",{className:"Login_Header"},i.a.createElement("h1",null,"Random Recipes")),i.a.createElement("form",{action:"",onSubmit:function(t){return e.handleSubmit(t)},className:"Login_form"},i.a.createElement("label",{htmlFor:"email",className:"Login_label"},"Email"),i.a.createElement("input",{type:"text",id:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleEmail(t)},className:"Login_input",required:!0}),i.a.createElement("label",{htmlFor:"password",className:"Login_label"},"Password"),i.a.createElement("input",{type:"password",id:"password",name:"password",value:this.state.p_word,onChange:function(t){return e.handlePassword(t)},className:"Login_input",required:!0}),i.a.createElement("div",{className:"Login_buttoncontainer"},i.a.createElement("button",{type:"submit",className:"Login_button"},"Sign In")),i.a.createElement(c.b,{to:"/signup",className:"Login_signup"},"Create an account")),i.a.createElement("br",null),i.a.createElement("p",{className:"loginDescription"},"Tired of the same dinners every week? Ready to try something new? Welcome to Random Recipes! Login, and a new recipe will be waiting for you at the click of a button!"))}}]),a}(i.a.Component);f.contextType=N;var E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleLogout=n.handleLogout.bind(Object(g.a)(n)),n.toggleActive=n.toggleActive.bind(Object(g.a)(n)),n.state={active:!1},n}return Object(o.a)(a,[{key:"handleLogout",value:function(){fetch("".concat(b,"/api/logout"),{credentials:"include"})}},{key:"toggleActive",value:function(){!0===this.state.active?this.setState({active:!1}):this.setState({active:!0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"Nav_Container ".concat(this.state.active?"active":"")},i.a.createElement("nav",{className:"Nav_Navbar"},i.a.createElement("button",{type:"button",className:"Menu_button",onClick:this.toggleActive},this.state.active?"-":"+"),i.a.createElement("ul",{className:"Nav_Menu"},i.a.createElement("li",{className:"Nav_MenuLogo"},"Random Recipes"),i.a.createElement("li",{className:"Nav_MenuLogout ".concat(this.state.active?"":"hidden")},i.a.createElement(c.b,{onClick:this.handleLogout,to:"/login",className:"button"},"Logout")))))}}]),a}(i.a.Component);E.contextType=N;var _=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toLogin:!1,names:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/api/recipes/names"),{credentials:"include"}).then((function(t){if(403!==t.status)return t.json();e.setState({toLogin:!0})})).then((function(t){e.setState({names:t})}))}},{key:"render",value:function(){return!0===this.state.toLogin?i.a.createElement(p.a,{to:"/login"}):i.a.createElement("div",{className:"Page_Container"},i.a.createElement("header",null,i.a.createElement(E,{name:this.context.user.firstname})),i.a.createElement("div",{className:"Homepage_Container"},i.a.createElement("p",{className:"Homepage_Welcome"},"Sick of the same dinners? Done with your everyday desserts? Start your culinary adventure with the click of a button!"),i.a.createElement("div",{className:"NewRecipe_Link"},i.a.createElement(c.b,{to:"/newrecipe",className:"button"},"Get A New Recipe!"))))}}]),a}(i.a.Component);_.contextType=N;var w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toLogin:!1,names:{},recipe:{id:null,name:null,source:null,preptime:null,waittime:null,cooktime:null,servings:null,comments:null,calories:null,carbs:null,fat:null,fiber:null,ingredients:[],instructions:[],protein:null,satfat:null,sugar:null,tags:null},comment:!0},n.getNewRecipe=n.getNewRecipe.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/api/recipes/names"),{credentials:"include"}).then((function(t){if(403!==t.status)return t.json();e.setState({toLogin:!0})})).then((function(t){e.setState({names:t}),e.getNewRecipe()}))}},{key:"getNewRecipe",value:function(e){var t=this,a=Object.keys(this.state.names),n=Math.floor(Math.random()*a.length)+1,i=String(n);fetch("".concat(b,"/api/recipes/random/")+i,{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.ingredients&&(e.ingredients=t.prepIngredients(e.ingredients)),e.instructions&&(e.instructions=t.prepInstructions(e.instructions)),t.setState({recipe:e}),window.scrollTo(0,0),0==t.state.recipe.comments?t.setState({comment:!1}):t.setState({comment:!0})}))}},{key:"prepIngredients",value:function(e){return e.split("--")}},{key:"prepInstructions",value:function(e){return e.split("\r\n\r\n")}},{key:"render",value:function(){var e=this.state.recipe.ingredients,t=this.state.recipe.instructions;return!0===this.state.toLogin?i.a.createElement(p.a,{to:"/login"}):i.a.createElement("div",{className:"Page_Container"},i.a.createElement("header",null,i.a.createElement(E,{className:"NewRecipe_Nav"})),i.a.createElement("div",{className:"NewRecipe_Container"},i.a.createElement("h1",{className:"NewRecipe_Header Name"},this.state.recipe.name),i.a.createElement("h2",{className:"NewRecipe_Header Servings"},"Servings:"),i.a.createElement("h2",{className:"NewRecipe_Servings"}," ",this.state.recipe.servings),i.a.createElement("h2",{className:"NewRecipe_Header Ingredients"},"Ingredients:"),i.a.createElement("ul",{className:"NewRecipe_Ingredients_UL"},e.map((function(e,t){return i.a.createElement("li",{key:t,className:"NewRecipe_LI"},e," ")}))),i.a.createElement("h2",{className:"NewRecipe_Header Instructions"},"Cooking Instructions:"),i.a.createElement("ul",{className:"NewRecipe_Instructions_UL"},t.map((function(e,t){return i.a.createElement("li",{key:t,className:"NewRecipe_LI"},e)}))),i.a.createElement("h2",{className:"NewRecipe_Header ".concat(this.state.comment?"":"hidden")},"Notes:"),i.a.createElement("p",{className:"NewRecipe_Comments ".concat(this.state.comment?"":"hidden")},this.state.recipe.comments),i.a.createElement("h2",{className:"NewRecipe_Header Nutritional_Facts"},"Nutritional Information:"),i.a.createElement("ul",{className:"NewRecipe_Nutritional_Facts_UL"},i.a.createElement("li",{className:"NewRecipe_LI Calories"},"Calories: ",this.state.recipe.calories),i.a.createElement("li",{className:"NewRecipe_LI Fat"},"Fat: ",this.state.recipe.fat),i.a.createElement("li",{className:"NewRecipe_LI SatFat"},"Saturated Fat: ",this.state.recipe.satfat),i.a.createElement("li",{className:"NewRecipe_LI Carbs"},"Carbs: ",this.state.recipe.carbs),i.a.createElement("li",{className:"NewRecipe_LI Fiber"},"Fiber: ",this.state.recipe.fiber),i.a.createElement("li",{className:"NewRecipe_LI Sugar"},"Sugar: ",this.state.recipe.sugar),i.a.createElement("li",{className:"NewRecipe_LI Protein"},"Protein: ",this.state.recipe.protein)),i.a.createElement("div",{className:"NewRecipe_Button_Container"},i.a.createElement("button",{type:"button",onClick:this.getNewRecipe,className:"NewRecipe_Button"},"Get A New Recipe!"),i.a.createElement(c.b,{to:"/",className:"button"},"Go Back"))))}}]),a}(i.a.Component);w.contextType=N;a(19);var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:{},ingredients:[]},n}return Object(o.a)(a,[{key:"renderMainRoutes",value:function(){return i.a.createElement(p.b,null,i.a.createElement(p.b,{exact:!0,path:"/",component:_}),i.a.createElement(p.b,{path:"/login",component:f}),i.a.createElement(p.b,{path:"/signup",component:v}),i.a.createElement(p.b,{path:"/newrecipe",component:w}))}},{key:"render",value:function(){var e=this,t={user:this.state.user,setUser:function(t){e.setState({user:t})},ingredients:this.state.ingredients,setIngredients:function(t){e.setState({ingredients:t})}};return i.a.createElement(N.Provider,{value:t},i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App_header"}),i.a.createElement(d,{errorMessage:"could not display MainRoutes"},i.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),a}(n.Component);s.a.render(i.a.createElement(c.a,null,i.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0d309e3d.chunk.js.map