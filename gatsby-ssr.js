"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPreBodyComponents = _ref.setPreBodyComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (process.env.NODE_ENV !== "production" || !pluginOptions.trackingId) {
    return null;
  }

  var metrikaSrc = pluginOptions.useCDN ? "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js" : "https://mc.yandex.ru/metrika/tag.js";

  // Lighthouse recommends pre-connecting to an analytics domain.
  setHeadComponents([_react2.default.createElement("link", {
    rel: "preconnect dns-prefetch",
    key: "preconnect-yandex-metrika",
    href: "" + (pluginOptions.useCDN ? "https://cdn.jsdelivr.net" : "https://mc.yandex.ru")
  })]);

  var setComponents = pluginOptions.afterBody ? setPostBodyComponents : setPreBodyComponents;
  return setComponents([_react2.default.createElement("script", {
    key: "gatsby-plugin-yandex-metrika",
    dangerouslySetInnerHTML: {
      __html: "\n  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0]," + (pluginOptions.defer ? "k.defer=1" : "k.async=1") + ",k.src=r,a.parentNode.insertBefore(k,a)})\n  (window, document, \"script\", \"" + metrikaSrc + "\", \"ym\");\n\n  ym(" + pluginOptions.trackingId + ", \"init\", {\n      defer: true,\n      clickmap:true,\n      trackLinks:true,\n      accurateTrackBounce:true,\n      webvisor:" + pluginOptions.webvisor + ",\n      trackHash:" + pluginOptions.trackHash + "\n  });\n" } }), _react2.default.createElement(
    "noscript",
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("img", { src: "https://mc.yandex.ru/watch/" + pluginOptions.trackingId, style: { position: 'absolute', left: '-9999px' }, alt: "" })
    )
  )]);
};