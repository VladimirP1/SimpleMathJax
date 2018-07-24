function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

function enableScrollingForElement(wrapelem, elem) {
    wrapelem.css({
        display: "flex",
        padding: "0.5em",
        "overflow-x": "auto",
        "box-sizing": "border-box"
    });

    elem.css({
        display: "inline-block",
        width: "100%"
    });
}

function enableScrolling() {
    var math = $(".MathJax");
    for (var i = 0; i < math.length; i++) {
        console.log($(window).width(), math[i].getBoundingClientRect().width);
        var cur = math[i];
        var Jcur = $(cur);
        if ($(window).width() < cur.getBoundingClientRect().width) {
            enableScrollingForElement(Jcur, Jcur.find('.math'));
        }
    }
}

function loadMath() {
        $.getScript( '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js',
        	function () {
        		var extensions = ["tex2jax.js","TeX/AMSmath.js","TeX/color.js","TeX/AMSmath.js","TeX/AMSsymbols.js","TeX/noErrors.js","TeX/noUndefined.js"];
        		MathJax.Hub.Config({
        			showMathMenu: false,
        			extensions: extensions,
        			jax: ["input/TeX", "output/HTML-CSS"],
        			"HTML-CSS": { scale: 100 },
        			tex2jax: { inlineMath: [["$","$"],["\\(","\\)"],["[math]",'[/math]']] },
        		});

        		MathJax.Hub.Queue(function() {
        			$(".MathJax").parent().css('opacity',1);
        			enableScrolling();
        		});
        	}
        );
}

defer(function() { loadMath(); });
