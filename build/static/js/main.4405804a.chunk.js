(this["webpackJsonprandom-recipe-roulette"]=this["webpackJsonprandom-recipe-roulette"]||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),s=a(7),l=a(3),o=a(4),u=a(6),m=a(5),p=a(1),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",null,this.props.errorMessage):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),a}(r.a.Component),h=a(22),g=a(8),b=r.a.createContext({user:{},setUser:function(){},ingredients:[],setIngredients:function(){}}),v="https://still-woodland-16107.herokuapp.com",E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a,n=new FormData(e.target),r={},i=Object(h.a)(n.entries());try{for(i.s();!(a=i.n()).done;){var c=a.value;r[c[0]]=c[1]}}catch(s){i.e(s)}finally{i.f()}fetch("".concat(v,"/api/users"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){e&&e.hasOwnProperty("id")?(t.context.setUser({id:e.id}),t.props.history.push("/login")):alert("This email address is already being used by another account")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"SignUp_container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"SignUp_form"},r.a.createElement("h2",{className:"SignUp_header"},"Create Account"),r.a.createElement("label",{htmlFor:"firstname",className:"SignUp_label"},"First Name*"),r.a.createElement("input",{type:"text",id:"firstname",name:"firstname",className:"SignUp_input",required:!0}),r.a.createElement("label",{htmlFor:"lastname",className:"SignUp_label"},"Last Name*"),r.a.createElement("input",{type:"text",id:"lastname",name:"lastname",className:"SignUp_input",required:!0}),r.a.createElement("label",{htmlFor:"email",className:"SignUp_label"},"Email*"),r.a.createElement("input",{type:"text",id:"email",name:"email",className:"SignUp_input",required:!0}),r.a.createElement("label",{htmlFor:"p_word",id:"p_word",name:"p_word",className:"SignUp_label"},"Password*"),r.a.createElement("input",{type:"password",id:"p_word",name:"p_word",className:"SignUp_input",required:!0}),r.a.createElement("div",{className:"SignUp_button_container"},r.a.createElement("button",{name:"signup",className:"SignUp_button"}," Create Account  "),r.a.createElement(s.b,{className:"button back",to:"/login"},"Go Back"))))}}]),a}(r.a.Component);E.contextType=b;var f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"",p_word:""},n.handlePassword=n.handlePassword.bind(Object(g.a)(n)),n.handleEmail=n.handleEmail.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"handlePassword",value:function(e){this.setState({p_word:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"fetchUser",value:function(e){return fetch("".concat(v,"/api/users/")+e,{method:"GET",headers:{"Content-Type":"application/json"}}).catch((function(e){})).then((function(e){return e.json()}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;fetch("".concat(v,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){if(e&&e.hasOwnProperty("id"))return e.id;throw new Error("Something went wrong")})).then((function(e){return t.fetchUser(e)})).then((function(e){e.hasOwnProperty("id")&&(t.context.setUser(e),t.props.history.push("/"))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Login_container"},r.a.createElement("header",{className:"Login_Header"},r.a.createElement("h1",null,"Random Recipes")),r.a.createElement("form",{action:"",onSubmit:function(t){return e.handleSubmit(t)},className:"Login_form"},r.a.createElement("label",{htmlFor:"email",className:"Login_label"},"Email"),r.a.createElement("input",{type:"text",id:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleEmail(t)},className:"Login_input",required:!0}),r.a.createElement("label",{htmlFor:"password",className:"Login_label"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",value:this.state.p_word,onChange:function(t){return e.handlePassword(t)},className:"Login_input",required:!0}),r.a.createElement("div",{className:"Login_buttoncontainer"},r.a.createElement("button",{type:"submit",className:"Login_button"},"Sign In")),r.a.createElement(s.b,{to:"/signup",className:"Login_signup"},"Create an account")),r.a.createElement("br",null),r.a.createElement("p",{className:"loginDescription"},"Tired of the same dinners every week? Ready to try something new? Welcome to Random Recipes! Login, and a new recipe will be waiting for you at the click of a button!"))}}]),a}(r.a.Component);f.contextType=b;var N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleLogout=n.handleLogout.bind(Object(g.a)(n)),n.toggleActive=n.toggleActive.bind(Object(g.a)(n)),n.state={active:!1},n}return Object(o.a)(a,[{key:"handleLogout",value:function(){fetch("".concat(v,"/api/logout"),{credentials:"include"})}},{key:"toggleActive",value:function(){!0===this.state.active?this.setState({active:!1}):this.setState({active:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Nav_Container ".concat(this.state.active?"active":"")},r.a.createElement("nav",{className:"Nav_Navbar"},r.a.createElement("button",{type:"button",className:"Menu_button",onClick:this.toggleActive},this.state.active?"-":"+"),r.a.createElement("ul",{className:"Nav_Menu"},r.a.createElement("li",{className:"Nav_MenuLogo"},"Random Recipes"),r.a.createElement("li",{className:"Nav_MenuLogout ".concat(this.state.active?"":"hidden")},r.a.createElement(s.b,{onClick:this.handleLogout,to:"/login",className:"button"},"Logout")))))}}]),a}(r.a.Component);N.contextType=b;var S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toLogin:!1,names:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/api/recipes/names"),{credentials:"include"}).then((function(t){if(403!==t.status)return t.json();e.setState({toLogin:!0})})).then((function(t){e.setState({names:t})}))}},{key:"render",value:function(){return!0===this.state.toLogin?r.a.createElement(p.a,{to:"/login"}):r.a.createElement("div",{className:"Page_Container"},r.a.createElement("header",null,r.a.createElement(N,{name:this.context.user.firstname})),r.a.createElement("div",{className:"Homepage_Container"},r.a.createElement("p",{className:"Homepage_Welcome"},"Sick of the same dinners? Done with your everyday desserts? Start your culinary adventure with the click of a button!"),r.a.createElement("div",{className:"NewRecipe_Link"},r.a.createElement(s.b,{to:"/newrecipe",className:"button"},"Get A New Recipe!")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/addrecipe",className:"button"},"Have your own recipe to share? Add it here!"))))}}]),a}(r.a.Component);S.contextType=b;var w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toLogin:!1,names:{},recipe:{id:null,name:null,source:null,preptime:null,waittime:null,cooktime:null,servings:null,comments:null,calories:null,carbs:null,fat:null,fiber:null,ingredients:[],instructions:[],protein:null,satfat:null,sugar:null,tags:null},comment:!0},n.getNewRecipe=n.getNewRecipe.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/api/recipes/names"),{credentials:"include"}).then((function(t){if(403!==t.status)return t.json();e.setState({toLogin:!0})})).then((function(t){e.setState({names:t}),e.getNewRecipe()}))}},{key:"getNewRecipe",value:function(e){var t=this,a=Object.keys(this.state.names),n=Math.floor(Math.random()*a.length)+1,r=String(n);fetch("".concat(v,"/api/recipes/random/")+r,{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.ingredients&&(e.ingredients=t.prepIngredients(e.ingredients)),e.instructions&&(e.instructions=t.prepInstructions(e.instructions)),t.setState({recipe:e}),window.scrollTo(0,0),0==t.state.recipe.comments?t.setState({comment:!1}):t.setState({comment:!0})}))}},{key:"prepIngredients",value:function(e){return e.split("--")}},{key:"prepInstructions",value:function(e){return e.split("\r\n\r\n")}},{key:"render",value:function(){var e=this.state.recipe.ingredients,t=this.state.recipe.instructions;return!0===this.state.toLogin?r.a.createElement(p.a,{to:"/login"}):r.a.createElement("div",{className:"Page_Container"},r.a.createElement("header",null,r.a.createElement(N,{className:"NewRecipe_Nav"})),r.a.createElement("div",{className:"NewRecipe_Container"},r.a.createElement("h1",{className:"NewRecipe_Header Name"},this.state.recipe.name),r.a.createElement("h2",{className:"NewRecipe_Header Servings"},"Servings:"),r.a.createElement("h2",{className:"NewRecipe_Servings"}," ",this.state.recipe.servings),r.a.createElement("h2",{className:"NewRecipe_Header Ingredients"},"Ingredients:"),r.a.createElement("ul",{className:"NewRecipe_Ingredients_UL"},e.map((function(e,t){return r.a.createElement("li",{key:t,className:"NewRecipe_LI"},e," ")}))),r.a.createElement("h2",{className:"NewRecipe_Header Instructions"},"Cooking Instructions:"),r.a.createElement("ul",{className:"NewRecipe_Instructions_UL"},t.map((function(e,t){return r.a.createElement("li",{key:t,className:"NewRecipe_LI"},e)}))),r.a.createElement("h2",{className:"NewRecipe_Header ".concat(this.state.comment?"":"hidden")},"Notes:"),r.a.createElement("p",{className:"NewRecipe_Comments ".concat(this.state.comment?"":"hidden")},this.state.recipe.comments),r.a.createElement("h2",{className:"NewRecipe_Header Nutritional_Facts"},"Nutritional Information:"),r.a.createElement("ul",{className:"NewRecipe_Nutritional_Facts_UL"},r.a.createElement("li",{className:"NewRecipe_LI Calories"},"Calories: ",this.state.recipe.calories),r.a.createElement("li",{className:"NewRecipe_LI Fat"},"Fat: ",this.state.recipe.fat),r.a.createElement("li",{className:"NewRecipe_LI SatFat"},"Saturated Fat: ",this.state.recipe.satfat),r.a.createElement("li",{className:"NewRecipe_LI Carbs"},"Carbs: ",this.state.recipe.carbs),r.a.createElement("li",{className:"NewRecipe_LI Fiber"},"Fiber: ",this.state.recipe.fiber),r.a.createElement("li",{className:"NewRecipe_LI Sugar"},"Sugar: ",this.state.recipe.sugar),r.a.createElement("li",{className:"NewRecipe_LI Protein"},"Protein: ",this.state.recipe.protein)),r.a.createElement("div",{className:"NewRecipe_Button_Container"},r.a.createElement("button",{type:"button",onClick:this.getNewRecipe,className:"NewRecipe_Button"},"Get A New Recipe!"),r.a.createElement(s.b,{to:"/",className:"button"},"Go Back"))))}}]),a}(r.a.Component);w.contextType=b;var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toLogin:!1,name:"",preptime:[],waittime:[],cooktime:[],servings:[],comments:"",calories:"",fat:[],satfat:[],carbs:[],fiber:[],sugar:[],protein:[],instructions:[],ingredients:[],tags:[]},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/api/recipes/names"),{credentials:"include"}).then((function(t){if(403!==t.status)return t.json();e.setState({toLogin:!0})}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state;fetch("".concat(v,"/api/recipes"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})}},{key:"render",value:function(){var e=this;return $(document).onClick("click",".addIngredient",(function(){$(this).parent().append('<input type="text" name="myInput">')})),$(document).onClick("click",".addInstruction",(function(){$(this).parent().append('<input type="text" name="myInput">')})),$(document).onClick("click",".addTag",(function(){$(this).parent().append('<input type="text" name="myInput">')})),!0===this.state.toLogin?r.a.createElement(p.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("main",{id:"addRecipeMain"},r.a.createElement("form",{id:"addRecipeForm",action:"",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:"recName"},"Recipe Name"),r.a.createElement("input",{class:"recInput",id:"recName",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value()})},required:!0}),r.a.createElement("label",{htmlFor:"recPrep"},"Recipe Prep Time"),r.a.createElement("input",{class:"recInput",id:"recPrep",value:this.state.preptime,onChange:function(t){return e.setState({preptime:t.target.value()})}}),r.a.createElement("label",{htmlFor:"recWait"},"Recipe Wait Time"),r.a.createElement("input",{class:"recInput",id:"recWait",value:this.state.waittime,onChange:function(t){return e.setState({waittime:t.target.value()})}}),r.a.createElement("label",{htmlFor:"recCook"},"Recipe Cook Time"),r.a.createElement("input",{class:"recInput",id:"recCook",value:this.state.cooktime,onChange:function(t){return e.setState({cooktime:t.target.value()})}}),r.a.createElement("label",{htmlFor:"recServings"},"Recipe Servings"),r.a.createElement("input",{class:"recInput",id:"recServings",value:this.state.servings,onChange:function(t){return e.setState({servings:Num(t.target.value())})}}),r.a.createElement("label",{htmlFor:"recComments"},"Recipe Comments"),r.a.createElement("input",{class:"recInput",id:"recComments",value:this.state.comments,onChange:function(t){return e.setState({comments:t.target.value()})}}),r.a.createElement("label",{htmlFor:"recCalories"},"Recipe Calories"),r.a.createElement("input",{class:"recInput",id:"recCalories",value:this.state.calories,onChange:function(t){return e.setState({calories:Num(t.target.value())})}}),r.a.createElement("label",{htmlFor:"recFat"},"Recipe Fat"),r.a.createElement("input",{class:"recInput",id:"recFat",value:this.state.fat,onChange:function(t){return e.setState({fat:Num(t.target.value())})}}),r.a.createElement("label",{htmlFor:"recSatFat"},"Recipe Saturated Fat"),r.a.createElement("input",{class:"recInput",id:"recSatFat",value:this.state.satfat,onChange:function(t){return e.setState({satfat:Num(t.target.value())})}}),r.a.createElement("label",{htmlFor:"recCarbs"},"Recipe Carbs"),r.a.createElement("input",{class:"recInput",id:"recCarbs",value:this.state.carbs,onChange:function(t){return e.setState({carbs:Num(t.target.value())})}}),r.a.createElement("label",{htmlFor:"recFiber"},"Recipe Fiber"),r.a.createElement("input",{class:"recInput",id:"recFiber",value:this.state.fiber,onChange:function(t){return e.setState({fiber:Num(t.target.value())})}}),r.a.createElement("label",{htmlFor:"recSugar"},"Recipe Sugar"),r.a.createElement("input",{class:"recInput",id:"recSugar",value:this.state.sugar,onChange:function(t){return e.setState({sugar:Num(t.target.value())})}}),r.a.createElement("label",{htmlFor:"recProtein"},"Recipe Protein"),r.a.createElement("input",{class:"recInput",id:"recProtein",value:this.state.protein,onChange:function(t){return e.setState({protein:Num(t.target.value())})}}),r.a.createElement("section",null,r.a.createElement("button",null,"add a step"),r.a.createElement("label",{htmlFor:"recInstructions"},"Recipe Instructions"),r.a.createElement("input",{class:"recInput",id:"recInstructions",value:this.state.instructions,onChange:function(t){return e.setState({instructions:[t.target.value()]})},required:!0})),r.a.createElement("section",null,r.a.createElement("button",{class:"addIngredient"},"add an ingredient"),r.a.createElement("label",{htmlFor:"recIngredients"},"Recipe Ingredients"),r.a.createElement("input",{class:"recInput",id:"recIngredients",value:this.state.ingredients,onChange:function(t){return e.setState({ingredients:[t.target.value()]})},required:!0})),r.a.createElement("section",null,r.a.createElement("button",null,"add a tag"),r.a.createElement("label",{htmlFor:"recTags"},"Recipe Tags"),r.a.createElement("input",{class:"recInput",id:"recTags",value:this.state.tags})),r.a.createElement("button",null,"submit"))))}}]),a}(r.a.Component),_=(a(19),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:{},ingredients:[]},n}return Object(o.a)(a,[{key:"renderMainRoutes",value:function(){return r.a.createElement(p.b,null,r.a.createElement(p.b,{exact:!0,path:"/",component:S}),r.a.createElement(p.b,{path:"/login",component:f}),r.a.createElement(p.b,{path:"/signup",component:E}),r.a.createElement(p.b,{path:"/newrecipe",component:w}),r.a.createElement(p.b,{path:"/addrecipe",component:y}))}},{key:"render",value:function(){var e=this,t={user:this.state.user,setUser:function(t){e.setState({user:t})},ingredients:this.state.ingredients,setIngredients:function(t){e.setState({ingredients:t})}};return r.a.createElement(b.Provider,{value:t},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App_header"}),r.a.createElement(d,{errorMessage:"could not display MainRoutes"},r.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),a}(n.Component));c.a.render(r.a.createElement(s.a,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4405804a.chunk.js.map