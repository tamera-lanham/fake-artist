(this["webpackJsonpfake-artist"]=this["webpackJsonpfake-artist"]||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(11),s=t.n(o),i=(t(96),t(13)),l=t(24),c=t(12),d=t(25),u=t(45),m=t(140),j=t(143),h=t(145),b=t(153),O=t(150),p=t(152),g=t(156),x=t(155),f=t(148),y=t(157),v=t(149),B=t(151),C=t(78),P=t.n(C),k=t(77),S=t.n(k),A=t(60),I=t(2),H=Object(m.a)({card:{margin:10,padding:5},colorPicker:{display:"flex",flexWrap:"wrap","& > *":{margin:1,marginRight:5,height:30}},icon:{float:"right"},gridContainer:{display:"flex","& > *":{flexGrow:1,margin:10}},link:{padding:8,display:"flex"},button:{width:"100%",height:"100%"}});function w(e){var a=e.setPlayer,t=H(),r="",o="#eee",s=n.a.useState(r),l=Object(i.a)(s,2),c=l[0],d=l[1],u=n.a.useState(o),m=Object(i.a)(u,2),b=m[0],O=m[1];return Object(I.jsx)(j.a,{className:t.card,style:{backgroundColor:b},children:Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({name:c,color:b}),d(r),O(o)},children:[Object(I.jsx)(h.a,{children:Object(I.jsx)(g.a,{label:"New player name",value:c,onInput:function(e){return d(e.target.value)}})}),Object(I.jsx)(h.a,{children:Object(I.jsx)(G,{onColorChoice:function(e){a({name:c,color:e}),d(r),O(o)}})})]})})}function F(e){var a=e.player,t=e.setPlayer,r=H(),o=n.a.useState(a.color),s=Object(i.a)(o,2),l=s[0],c=s[1];var d=n.a.useState(a.name),m=Object(i.a)(d,2),b=m[0],p=m[1],x=n.a.useState(!1),f=Object(i.a)(x,2),y=f[0],B=f[1];function C(e){e.preventDefault(),t({name:b,color:l})}return Object(I.jsxs)(j.a,{className:r.card,style:{backgroundColor:l},children:[Object(I.jsx)(h.a,{children:Object(I.jsxs)("form",{onSubmit:C,children:[Object(I.jsx)(g.a,{defaultValue:a.name,label:"Name",onInput:function(e){return p(e.target.value)},onBlur:C}),Object(I.jsx)(v.a,{onClick:function(){return t(null)},className:r.icon,children:Object(I.jsx)(S.a,{})}),Object(I.jsx)(v.a,{onClick:function(){B(!y)},className:r.icon,children:Object(I.jsx)(P.a,{})})]})}),Object(I.jsx)(O.a,{in:y,timeout:"auto",unmountOnExit:!0,children:Object(I.jsx)(h.a,{children:Object(I.jsx)(G,{onColorChoice:function(e){c(e),t(Object(u.a)(Object(u.a)({},a),{},{color:e}))}})})})]})}function G(e){var a=e.onColorChoice,t=H();return Object(I.jsx)("div",{className:t.colorPicker,children:["#AC6D5E","#ED5842","#F79C8F","#F7AA64","#FFD28A","#BDC586","#687C6F","#56AFAC","#365A79","#74688E","#B0B0B0"].map((function(e,r){return Object(I.jsx)(B.a,{className:t.colorBlock,style:{backgroundColor:e},onClick:function(){return a(e)}},r)}))})}function T(e){var a=e.gameState,t=e.setGameState,r=H();function o(e){return e[Math.floor(Math.random()*e.length)]}var s=n.a.useState("Random"),c=Object(i.a)(s,2),m=c[0],j=c[1],h=n.a.useState(1),b=Object(i.a)(h,2),O=b[0],p=b[1],g=["Random"].concat(Object(d.a)(A.categories)),v=Object(d.a)(Array(Math.max(1,a.players.length)).keys()).map((function(e){return e+1}));return v.push("Random"),Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{className:r.gridContainer,children:[Object(I.jsxs)(f.a,{variant:"outlined",children:[Object(I.jsx)(y.a,{htmlFor:"category-select",children:"Category"}),Object(I.jsx)(x.a,{native:!0,label:"Category",inputProps:{id:"category-select"},value:m,onChange:function(e){return j(e.target.value)},children:g.map((function(e,a){return Object(I.jsx)("option",{value:e,children:e},a)}))})]},0),Object(I.jsxs)(f.a,{variant:"outlined",children:[Object(I.jsx)(y.a,{htmlFor:"numfakers-select",children:"Number of fakers"}),Object(I.jsx)(x.a,{native:!0,label:"Number of fakers",inputProps:{id:"numfakers-select"},value:O,onChange:function(e){return p(e.target.value)},children:v.map((function(e,a){return Object(I.jsx)("option",{value:e,children:e},a)}))})]},1)]}),Object(I.jsx)(l.b,{to:"/play/1",className:r.link,children:Object(I.jsx)(B.a,{variant:"contained",color:"primary",onClick:function(){var e=function(e){var a,t;if("Random"===e){var r=o(A.list),n=Object(i.a)(r,2);a=n[0],t=n[1]}else{a=e;var s=o(A.list.filter((function(a){var t=Object(i.a)(a,2),r=t[0];return t[1],r===e}))),l=Object(i.a)(s,2);l[0],t=l[1]}return[a,t]}(m),r=Object(i.a)(e,2),n=r[0],s=r[1],l=function(e){var t=[],r=a.players.length;for("Random"===e&&(e=Math.floor(Math.random()*(r-1))+1),e=Math.min(e,r);t.length<e;){var n=Math.floor(Math.random()*r);t.includes(n)||t.push(n)}return t}(O);t(Object(u.a)(Object(u.a)({},a),{},{category:n,word:s,fakerIndices:l}))},className:r.button,children:"Start game"})})]})}var M=function(e){var a=e.gameState,t=e.setGameState,r=n.a.useState(a),o=Object(i.a)(r,2),s=o[0],l=o[1];function c(e){var a=Object(u.a)({},e);l(a),t(a)}function d(e,a){null==e?s.players.splice(a,1):a===1/0?s.players.push(e):s.players[a]=e,c(s)}return Object(I.jsxs)(p.a,{maxWidth:"md",children:[Object(I.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:"Setup"}),s.players.map((function(e,a){return Object(I.jsx)(F,{player:e,setPlayer:function(e){return d(e,a)}},a+e.name+e.color)})),Object(I.jsx)(w,{setPlayer:function(e){return d(e,1/0)}}),Object(I.jsx)(T,{gameState:s,setGameState:c})]})},N=t(154),D=Object(m.a)({gridContainer:{display:"flex",gap:10,marginBottom:10,"& > *":{flexGrow:1}},categoryCard:{padding:10,marginTop:10,backgroundColor:"rgba(255, 255, 255, 0)",flex:"0 0 40%"},wordRevealCard:{padding:10,marginTop:10,border:"1px solid rgba(255, 255, 255, .4)",backgroundColor:"rgba(255, 255, 255, .4)"},nextButton:{width:"100%"}});function L(e){var a=e.gameState;var t,r=parseInt(Object(c.h)().playerNum),n=r-1,o=a.players[n],s=(t=o.name).trim()?t:"player "+(n+1);D();return Object(I.jsx)(p.a,{maxWidth:"md",style:{backgroundColor:o.color},children:Object(I.jsxs)("div",{style:{height:"100vh",padding:20},children:[Object(I.jsx)(b.a,{align:"center",variant:"h5",children:"Pass the phone to"}),Object(I.jsx)(b.a,{align:"center",variant:"h2",gutterBottom:!0,style:{marginBottom:50},children:s}),Object(I.jsxs)(N.a,{spacing:2,children:[Object(I.jsxs)(b.a,{variant:"h6",align:"center",children:["Category: ",Object(I.jsx)("b",{children:a.category})]}),Object(I.jsx)(R,{gameState:a,otherProps:{index:n,playerName:s}}),Object(I.jsx)(E,{gameState:a,playerNum:r})]})]})})}function R(e){var a=e.gameState,t=e.otherProps,r=n.a.useState(!1),o=Object(i.a)(r,2),s=o[0],l=o[1];return Object(I.jsx)("div",{onMouseDown:function(){return l(!0)},onMouseUp:function(){return l(!1)},onMouseOut:function(){return l(!1)},onTouchStart:function(){return l(!0)},onTouchEnd:function(){return l(!1)},onTouchCancel:function(){return l(!1)},children:Object(I.jsx)(W,{gameState:a,otherProps:t,mouseDown:s})})}function W(e){var a=e.gameState,t=e.otherProps,r=e.mouseDown,n=D(),o=t.index,s=t.playerName,i=(a.players[o],a.fakerIndices.includes(o));return r?i?Object(I.jsx)(j.a,{variant:"outlined",className:n.wordRevealCard,children:Object(I.jsx)(h.a,{children:Object(I.jsx)(b.a,{variant:"h6",align:"center",children:Object(I.jsx)("b",{children:"You're a faker!"})})})}):Object(I.jsx)(j.a,{variant:"outlined",className:n.wordRevealCard,children:Object(I.jsx)(h.a,{children:Object(I.jsxs)(b.a,{variant:"h6",align:"center",children:["The word is ",Object(I.jsx)("b",{children:a.word})]})})}):Object(I.jsx)(j.a,{variant:"outlined",className:n.wordRevealCard,children:Object(I.jsx)(h.a,{children:Object(I.jsxs)(b.a,{variant:"h6",align:"center",children:["Hold to see the word (for ",s,"'s eyes only!)"]})})})}function E(e){var a=e.gameState,t=e.playerNum,r=a.players.length,n=D();return t<r?Object(I.jsx)(l.b,{to:"./".concat(t+1),children:Object(I.jsx)(B.a,{variant:"contained",className:n.nextButton,children:"Next player"})}):Object(I.jsx)(l.b,{to:"/reveal",children:Object(I.jsx)(B.a,{variant:"contained",color:"primary",className:n.nextButton,children:"Done"})})}function J(e){var a=e.gameState,t=Object(c.i)();t.path,t.url;return Object(I.jsxs)(p.a,{maxWidth:"md",children:[Object(I.jsx)("h2",{children:"This is the game state:"}),Object(I.jsx)("pre",{children:JSON.stringify(a,null,4)}),Object(I.jsx)("br",{}),Object(I.jsx)(l.b,{to:"/setup",children:"Return to setup"}),Object(I.jsx)("br",{})]})}var K=function(e){var a=e.gameState,t=Object(c.i)(),r=t.path,n=(t.url,Object(c.g)().pathname);return Object(I.jsx)("div",{children:Object(I.jsxs)(c.d,{children:[Object(I.jsx)(c.a,{from:"/:url*(/+)",to:n.slice(0,-1)})," ",Object(I.jsx)(c.b,{exact:!0,path:r,children:Object(I.jsx)(J,{gameState:a})}),Object(I.jsx)(c.b,{path:"".concat(r,"/:playerNum"),children:Object(I.jsx)(L,{gameState:a})})]})})},V=Object(m.a)({gridContainer:{display:"flex",gap:10,marginBottom:10,"& > *":{flexGrow:1}},button:{display:"block",marginBottom:10,width:"100%"},link:{textDecoration:"none"},revealCard:{marginBottom:10}});function q(e){var a=e.gameState,t=e.revealed,r=V();var n=a.fakerIndices.map((function(e){return t=a.players[e].name,r=e,t.trim()?t:"player "+(r+1);var t,r})).join(", ");return t?Object(I.jsx)(j.a,{className:r.revealCard,style:{backgroundColor:"#eee"},children:Object(I.jsxs)(h.a,{children:[Object(I.jsxs)(b.a,{variant:"h6",align:"center",children:["Word: ",Object(I.jsx)("b",{children:a.word})]}),Object(I.jsxs)(b.a,{variant:"h6",align:"center",children:["Fakers: ",n]})]})}):Object(I.jsx)(j.a,{})}var z=function(e){var a=e.gameState,t=n.a.useState(!1),r=Object(i.a)(t,2),o=r[0],s=r[1],c=V();return Object(I.jsxs)(p.a,{maxWidth:"md",children:[Object(I.jsx)(b.a,{variant:"h2",align:"center",children:"Go draw!"}),Object(I.jsx)(b.a,{variant:"h6",align:"center",children:"And come back here when you're ready for the reveal"}),Object(I.jsx)(l.b,{to:"/reveal",className:c.link,children:Object(I.jsx)(B.a,{variant:"outlined",className:c.button,onClick:function(){return s(!o)},children:"See the results"})}),Object(I.jsx)(q,{gameState:a,revealed:o}),Object(I.jsx)(l.b,{to:"/setup",className:c.link,children:Object(I.jsx)(B.a,{color:"primary",variant:"contained",className:c.button,children:"Play again"})})]})};function U(){var e=n.a.useState({players:[],fakerIndices:[],category:"",word:""}),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(I.jsx)(l.a,{children:Object(I.jsxs)(c.d,{children:[Object(I.jsx)(c.b,{exact:!0,path:"/",children:Object(I.jsx)(c.a,{to:"/setup"})}),Object(I.jsx)(c.b,{path:"/setup",children:Object(I.jsx)(M,{gameState:t,setGameState:r})}),Object(I.jsx)(c.b,{path:"/play",children:Object(I.jsx)(K,{gameState:t})}),Object(I.jsx)(c.b,{path:"/reveal",children:Object(I.jsx)(z,{gameState:t})})]})})}var Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,159)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,o=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),o(e),s(e)}))};s.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(U,{})}),document.getElementById("root")),Y()},60:function(e){e.exports=JSON.parse('{"categories":["Cowboy Gear","Foods","Weapons","Drinks","Outdoor Gear","Plants","Musical Instruments","Body Parts","Professions","Landmarks","Transportation","Animals","Household Items","Buildings"],"list":[["Animals","Lion"],["Animals","Tiger"],["Animals","Bear"],["Animals","Chicken"],["Animals","Owl"],["Animals","Penguin"],["Animals","Turkey"],["Animals","Alligator"],["Animals","Butterfly"],["Animals","Caterpillar"],["Animals","Fly"],["Animals","Frog"],["Animals","Dragonfly"],["Animals","Grasshopper"],["Animals","Ladybug"],["Animals","Lizard"],["Animals","Cockroach"],["Animals","Spider"],["Animals","Snake"],["Animals","Turtle"],["Animals","Boar"],["Animals","Beaver"],["Animals","Camel"],["Animals","Cow"],["Animals","Cat"],["Animals","Deer"],["Animals","Dog"],["Cowboy Gear","Horse"],["Animals","Elephant"],["Animals","Giraffe"],["Animals","Fox"],["Animals","Gorilla"],["Animals","Hippo"],["Animals","Lamb"],["Animals","Kangaroo"],["Animals","Raccoon"],["Animals","Seal"],["Animals","Rabbit"],["Animals","Porcupine"],["Animals","Zebra"],["Animals","Lobster"],["Animals","Shrimp"],["Animals","Octopus"],["Animals","Seahorse"],["Animals","Starfish"],["Plants","Pine Tree"],["Plants","Cactus"],["Plants","Poison Ivy"],["Plants","Dandelion"],["Plants","Fern"],["Plants","Root"],["Plants","Sunflower"],["Plants","Rose"],["Plants","Bush"],["Plants","Leaf"],["Plants","Vine"],["Plants","Tree"],["Foods","Apple"],["Foods","Spaghetti"],["Foods","Steak"],["Foods","Clams"],["Foods","Sushi"],["Foods","Potatoes"],["Foods","Burger"],["Foods","Hoagie"],["Foods","Herbs"],["Foods","Avocado"],["Foods","Banana"],["Foods","Pineapple"],["Foods","Raspberries"],["Foods","Watermelon"],["Foods","Blueberries"],["Foods","Nuts"],["Foods","Bread"],["Foods","Toast"],["Foods","Bacon"],["Foods","Eggs"],["Drinks","Soda"],["Drinks","Beer"],["Drinks","Wine"],["Drinks","Liquor"],["Drinks","Juice"],["Drinks","Coffee"],["Drinks","Tea"],["Drinks","Champagne"],["Outdoor Gear","Backpack"],["Outdoor Gear","Binoculars"],["Outdoor Gear","Blanket"],["Outdoor Gear","Camp Stove"],["Outdoor Gear","Beach Towel"],["Outdoor Gear","Cooler"],["Outdoor Gear","Surf Board"],["Outdoor Gear","Basketball"],["Outdoor Gear","Volley Ball"],["Outdoor Gear","Baseball"],["Outdoor Gear","Dumbbell"],["Outdoor Gear","Golf Club"],["Outdoor Gear","Fishing Rod"],["Outdoor Gear","Swimsuit"],["Outdoor Gear","Bicycle"],["Musical Instruments","Accordion"],["Musical Instruments","Banjo"],["Musical Instruments","Bongo"],["Musical Instruments","Bugle"],["Musical Instruments","Trumpet"],["Musical Instruments","Drum"],["Musical Instruments","Guitar"],["Musical Instruments","Saxophone"],["Musical Instruments","Organ"],["Musical Instruments","Trombone"],["Musical Instruments","Tuba"],["Musical Instruments","Cello"],["Body Parts","Armpit"],["Body Parts","Back"],["Body Parts","Butt"],["Body Parts","Ears"],["Body Parts","Eyes"],["Body Parts","Feet"],["Body Parts","Face"],["Body Parts","Fingers"],["Body Parts","Foot"],["Body Parts","Hand"],["Body Parts","Hair"],["Body Parts","Knees"],["Body Parts","Legs"],["Body Parts","Mouth"],["Body Parts","Toes"],["Body Parts","Brain"],["Body Parts","Heart"],["Body Parts","Teeth"],["Body Parts","Thumb"],["Body Parts","Lungs"],["Body Parts","Intestines"],["Buildings","Bakery"],["Buildings","Cafe"],["Buildings","Church"],["Buildings","Movie Theatre"],["Buildings","Book Store"],["Buildings","Barber Shop"],["Buildings","Airport"],["Buildings","Castle"],["Household Items","Broom"],["Household Items","Mop"],["Household Items","Blender"],["Household Items","Toaster"],["Household Items","Knife"],["Household Items","Lock and Key"],["Household Items","Pencil"],["Household Items","Pen"],["Household Items","Mug"],["Household Items","Salt and Pepper"],["Household Items","Pitcher"],["Household Items","Oven Mitt"],["Household Items","Oven"],["Household Items","Refrigerator"],["Household Items","Sink"],["Household Items","Toilet"],["Household Items","Plate"],["Household Items","Fork"],["Household Items","Spoon"],["Household Items","Chopsticks"],["Household Items","Bowl"],["Weapons","Gun"],["Household Items","Shovel"],["Household Items","Hammer"],["Household Items","Wrench"],["Household Items","Nail"],["Household Items","Saw"],["Weapons","Axe"],["Household Items","Ruler"],["Household Items","Bottle"],["Household Items","Bed"],["Household Items","Couch"],["Household Items","Chair"],["Household Items","Computer Mouse"],["Household Items","Computer"],["Household Items","Floppy Disk"],["Household Items","CD ROM"],["Household Items","Computer Keyboard"],["Household Items","Phone"],["Household Items","Ladder"],["Landmarks","Mount Rushmoore"],["Landmarks","Egyptian Pyramids"],["Landmarks","Eiffel Tower"],["Landmarks","Statue of Liberty"],["Landmarks","Grand Canyon"],["Landmarks","Big Ben"],["Landmarks","Space Needle"],["Landmarks","Taj Mahal"],["Professions","Cowboy"],["Professions","Doctor"],["Professions","Firefighter"],["Professions","Mail Carrier"],["Professions","Hacker"],["Professions","Seamstress"],["Professions","Dentist"],["Professions","Police Officer"],["Professions","Plumber"],["Professions","Construction Worker"],["Professions","Football Player"],["Cowboy Gear","10 Gallon Hat"],["Cowboy Gear","Bullet"],["Cowboy Gear","Pistol"],["Cowboy Gear","Bandolier"],["Cowboy Gear","Saddle"],["Cowboy Gear","Holster"],["Cowboy Gear","Rifle"],["Cowboy Gear","Lasso"],["Cowboy Gear","Boots"],["Transportation","Car"],["Transportation","Boat"],["Transportation","Airplane"],["Transportation","Truck"],["Transportation","Bus"],["Transportation","Train"],["Transportation","Railroad"],["Weapons","Bomb"],["Weapons","Bow and Arrow"],["Weapons","Cannon"],["Weapons","Spear"],["Weapons","Tank"],["Weapons","Sword"],["Weapons","Shield"],["Weapons","Hand Grenade"],["Weapons","Slingshot"],["Weapons","Raygun"]]}')},96:function(e,a,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.4cc6efa1.chunk.js.map