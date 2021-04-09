(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__13OGp",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2tTCz"}},11:function(e,t,a){e.exports={ModalBackdrop:"Modal_ModalBackdrop__1kgG8",ModalContent:"Modal_ModalContent__LOyhK",Overlay:"Modal_Overlay__1alZB",Modal:"Modal_Modal__1E-GG"}},14:function(e,t,a){e.exports={App:"App_App__3fQbW"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__vdFPg"}},16:function(e,t,a){e.exports={Button:"Button_Button__6kpzF"}},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=a(12),i=a(3),s=a(4),u=a(6),h=a(5),m=a(13),d=a.n(m),g=a(14),p=a.n(g),b=a(7),f=a.n(b),j=a(1),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:f.a.Searchbar,children:Object(j.jsxs)("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(j.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:f.a.SearchFormInput,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),_=a(15),O=a.n(_),v=a(10),S=a.n(v),I=function(e){var t=e.url,a=e.largeImageURL,n=e.onClick;return Object(j.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:"",className:S.a.ImageGalleryItemImage,onClick:function(e){return n(a)}})})},x=function(e){var t=e.arrImages,a=e.onClick;return Object(j.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(I,{url:e.webformatURL,largeImageURL:e.largeImageURL,onClick:a},e.id)}))})},k=a(11),w=a.n(k),C=document.querySelector("#modal-root"),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClick=function(){e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:w.a.ModalBackdrop,onClick:this.handleClick,children:Object(j.jsx)("div",{className:w.a.ModalContent,children:this.props.children})}),C)}}]),a}(n.Component),G="https://pixabay.com/api/",B="20710972-75b99232bccd614faaca28eeb",F=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o=e.pageSize,c=void 0===o?12:o;return fetch("".concat(G,"?key=").concat(B,"&q=").concat(a,"&page=").concat(r,"&image_type=photo&per_page=").concat(c)).then((function(e){return e.json()})).then((function(e){return e.hits}))},L=a(16),N=a.n(L),Q=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})},P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,showModal:!1,largeimage:null},e.onChangeQuery=function(t){e.setState({images:[],currentPage:1,searchQuery:t})},e.fetchImage=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),F(n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({isLoading:!1})}))},e.openModal=function(t){console.log(t),e.setState((function(e){return{showModal:!e.showModal,largeimage:t}}))},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal,largeimage:null}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImage()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading;return Object(j.jsxs)("div",{className:p.a.App,children:[Object(j.jsx)(y,{onSubmit:this.onChangeQuery}),Object(j.jsx)(x,{arrImages:this.state.images,onClick:this.openModal}),t.length>0&&Object(j.jsx)(Q,{onClick:this.fetchImage}),a&&Object(j.jsx)(d.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3}),this.state.showModal&&this.state.largeimage&&Object(j.jsx)(M,{onClose:this.closeModal,children:Object(j.jsx)("img",{src:this.state.largeimage,height:"100%",width:"100%",alt:""})})]})}}]),a}(n.Component);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2Gilg",SearchForm:"Searchbar_SearchForm__18XBW",SearchFormButton:"Searchbar_SearchFormButton__3dhVG",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1pNaz",SearchFormInput:"Searchbar_SearchFormInput__1Ldd2"}}},[[42,1,2]]]);
//# sourceMappingURL=main.e6eb1ac8.chunk.js.map