webpackJsonp([1,2],{42:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(8),r=o(u);e.default={getAboutMe:function(){return r.default.get("me")}}},47:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(42),r=o(u);e.default={data:function(){return{content:""}},route:{data:function(){var t=this;return r.default.getAboutMe().then(function(e){e.success&&(t.content=e.data.content)}).catch(function(t){alert("获取内容失败")})}}}},133:function(t,e){t.exports=' <div> <article class=post> <p v-html="content | markdown"> </p> </article> </div> '},143:function(t,e,n){var o,u,r={};o=n(47),u=n(133),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var c="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;u&&(c.template=u),c.computed||(c.computed={}),Object.keys(r).forEach(function(t){var e=r[t];c.computed[t]=function(){return e}})}});