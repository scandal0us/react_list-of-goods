(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),r=n.n(l),s=n(3),c=n(4),i=n(6),u=n(5),h=n(7),g=function(e){var t=e.goods;return o.a.createElement("ul",null,t.map(function(e){return o.a.createElement("li",{key:e},e)}))},d=["Dumplings(01)","Carrot(02)","Eggs(03)","Ice cream(04)","Apple(05)","Bread(06)","Fish(07)","Honey(08)","Jam(09)","Garlic(10)"],m=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={goods:[],isLoaded:!1,selectLength:1},n.handleClick=function(){n.setState({goods:[].concat(d),isLoaded:!0})},n.reverse=function(){n.setState({goods:n.state.goods.reverse()})},n.sortAlphabetically=function(){n.setState({goods:n.state.goods.sort()})},n.resetGoods=function(){n.setState({goods:[].concat(d),selectLength:1})},n.sortByLength=function(){n.setState({goods:n.state.goods.sort(function(e,t){return e.length-t.length})})},n.filterByLength=function(e){var t=e.target.value;n.setState({selectLength:t,goods:[].concat(d).filter(function(e){return e.length>=t})})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.isLoaded?o.a.createElement("div",null,o.a.createElement("h1",null,"Goods ",this.state.goods.length),o.a.createElement(g,{goods:this.state.goods}),o.a.createElement("button",{onClick:this.reverse},"Reverse"),o.a.createElement("button",{onClick:this.sortAlphabetically},"Sort alphabetically"),o.a.createElement("button",{onClick:this.resetGoods},"Reset"),o.a.createElement("button",{onClick:this.sortByLength},"Sort by length"),o.a.createElement("select",{value:this.state.selectLength,onChange:this.filterByLength},o.a.createElement("option",{value:"1"},"Length 1"),o.a.createElement("option",{value:"2"},"Length 2"),o.a.createElement("option",{value:"3"},"Length 3"),o.a.createElement("option",{value:"4"},"Length 4"),o.a.createElement("option",{value:"5"},"Length 5"),o.a.createElement("option",{value:"6"},"Length 6"),o.a.createElement("option",{value:"7"},"Length 7"),o.a.createElement("option",{value:"8"},"Length 8"),o.a.createElement("option",{value:"9"},"Length 9"),o.a.createElement("option",{value:"10"},"Length 10"))):o.a.createElement("div",null,o.a.createElement("h1",null,"Goods ",this.state.goods.length),o.a.createElement("button",{onClick:this.handleClick},"Start")))}}]),t}(o.a.Component);r.a.render(o.a.createElement(m,{test:123}),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2915c9ce.chunk.js.map