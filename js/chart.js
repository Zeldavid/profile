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
        /*function() {
                $("#text_1").text("Beginner");
                $("#text_2").text("Familiar");
                $("#text_3").text("Proficient");
                $("#text_4").text("Expert");
                $("#text_5").text("Master");
                $("#text_6").text("Legend");
                var sec = document.getElementsByClassName("text_chart");
                sec.innerHTML = "Hola mundo";
            },*/
        onStop: $.noop,
        onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
    });
});