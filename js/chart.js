$(function() {
    $('.chart').easyPieChart({
        //your configuration goes here
        barColor: "#ef5350",
        //trackColor: "#f2f2f2",
        trackColor: "#e0f7fa",
        //scaleColor: "#ef9a9a",
        scaleColor: false,
        lineCap: "square",
        lineWidth: 12,
        size: 200,
        animate: 2000,
        onStart: $.noop,
        onStop: $.noop,
        onStep: function(from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });
});