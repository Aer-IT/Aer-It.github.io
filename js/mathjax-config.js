MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: {
      equationNumbers: { autoNumber: "AMS" },
      extensions: ["AMSmath.js", "AMSsymbols.js"]
    }
  }
});

MathJax.Hub.Queue(function() {
  var all = MathJax.Hub.getAllJax(), i;
  for(i=0; i < all.length; i += 1) {
    all[i].SourceElement().parentNode.className += ' has-jax';
  }
});

MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  MathJax.Hub.Insert(MathJax.InputJax.TeX.Definitions.macros, {
    bm: ["boldsymbol", 1]
  });
}); 