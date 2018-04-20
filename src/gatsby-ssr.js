import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const versionSuffix = pluginOptions.version && pluginOptions.version === 2 ? '2' : '';

    return setPostBodyComponents([
      <script
      key={`gatsby-plugin-yandex-metrika`}
      dangerouslySetInnerHTML={{
        __html: `
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter = new Ya.Metrika${versionSuffix}({
                id:${pluginOptions.trackingId},
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:${pluginOptions.webvisor},
                trackHash:${pluginOptions.trackHash}
            });
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks${versionSuffix}");
`,}} />,
      <noscript><div><img src={`https://mc.yandex.ru/watch/${pluginOptions.trackingId}`} style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
    ])
  }
}
