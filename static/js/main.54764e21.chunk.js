(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={form_label:"Form_form_label__1Wyvs",form_input:"Form_form_input__1xixz",form_button:"Form_form_button__3FhVx"}},function(t,e,n){t.exports={contacts_item:"Contacts_contacts_item__JzMKp",contacts_text:"Contacts_contacts_text__39g0p",contacts_button:"Contacts_contacts_button__aKeay"}},,,function(t,e,n){t.exports={section:"Section_section__RNNdZ",title:"Section_title__3jTfY"}},function(t,e,n){t.exports={filter_label:"Filter_filter_label__1inxa",filter_input:"Filter_filter_input__gT_nT"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),o=n.n(r),i=(n(18),n(12)),s=n(8),l=n(2),u=n(3),d=n(5),b=n(4),m=n(22),h=n(10),j=n.n(h),f=n(0);var p=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{className:j.a.section,children:[Object(f.jsx)("h2",{className:j.a.title,children:e}),n]})},_=n(6),O=n.n(_),x=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(t){t.preventDefault()},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleAddContact=function(){var e=t.state,n=e.name,a=e.number;t.props.handleAddContact({name:n,number:a})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:O.a.form_label,children:["Name:",Object(f.jsx)("input",{className:O.a.form_input,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Name Lastname",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:O.a.form_label,children:["Number",Object(f.jsx)("input",{className:O.a.form_input,type:"tel",name:"number",value:n,onChange:this.handleChange,placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:O.a.form_button,type:"submit",onClick:this.handleAddContact,children:"Add contact"})]})}}]),n}(a.Component),C=x,v=n(7),g=n.n(v),y=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.filter,a=t.handleDeleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:n?e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{className:g.a.contacts_text,children:[t.name,": ",t.number]}),Object(f.jsx)("button",{className:g.a.contacts_button,type:"button",onClick:a,children:"Delete"},t.id)]},t.id)})):e.map((function(t){return Object(f.jsxs)("li",{className:g.a.contacts_item,children:[Object(f.jsxs)("p",{className:g.a.contacts_text,children:[t.name,": ",t.number]}),Object(f.jsx)("button",{className:g.a.contacts_button,type:"button",onClick:a,children:"Delete"},t.id)]},t.id)}))})})}}]),n}(a.Component),k=y,A=n(11),N=n.n(A),Z=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.handleChange;return Object(f.jsxs)("label",{className:N.a.filter_label,children:["Find contacts by name:",Object(f.jsx)("input",{className:N.a.filter_input,type:"text",name:"filter",value:e,onChange:n,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}}]),n}(a.Component),z=Z,S=["section"],w=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Alesia Zuk",number:"459-12-56"},{id:"id-2",name:"Aleksandr Zuk",number:"443-89-12"},{id:"id-3",name:"Viktorija Zuk",number:"645-17-79"},{id:"id-4",name:"Veronika Zuk",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleAddContact=function(e){var n=e.name,a=e.number,c=t.state.contacts;if(c.find((function(t){return t.name===n})))alert("".concat(n," is already in contacts"));else{var r=c,o={id:Object(m.a)(),name:n,number:a};t.setState({contacts:[].concat(Object(i.a)(r),[o])})}},t.handleDeleteContact=function(e){var n=t.state.contacts,a=e.target.key;console.log("click"),console.log(e.target),console.log(a);var c=n.find((function(t){return t.id===a})),r=n.indexOf(c);n.splice(r,1),t.setState({contacts:Object(i.a)(n)})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(f.jsxs)("section",{className:S,children:[Object(f.jsx)(p,{title:"Phonebook",children:Object(f.jsx)(C,{handleAddContact:this.handleAddContact})}),Object(f.jsxs)(p,{title:"Contacts",children:[Object(f.jsx)(z,{filter:n,handleChange:this.handleChange}),Object(f.jsx)(k,{contacts:e,filter:n,handleDeleteContact:this.handleDeleteContact})]})]})}}]),n}(a.Component);w.defaultProps={};var F=w;o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.54764e21.chunk.js.map