webpackJsonp([1],{7:function(t,e,o){var a,n;o(128),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},65:function(t,e,o){t.exports=o(7),'<h1>Choose a language</h1>\n\n<p><a class="button-language" v-link="{path: \'/\' + item.value}" v-for="item in $route.langs" v-text="item.text + ($route.default_lang.text === item.text ? \' (default)\' : \'\')"></a></p>\n'!==t.exports.template&&(t.exports.template='<h1>Choose a language</h1>\n\n<p><a class="button-language" v-link="{path: \'/\' + item.value}" v-for="item in $route.langs" v-text="item.text + ($route.default_lang.text === item.text ? \' (default)\' : \'\')"></a></p>\n')},126:function(t,e,o){e=t.exports=o(127)(),e.push([t.id,".button-language{display:block;font-size:20px;margin-bottom:20px}",""])},128:function(t,e,o){var a=o(126);"string"==typeof a&&(a=[[t.id,a,""]]);o(64)(a,{});a.locals&&(t.exports=a.locals)}});