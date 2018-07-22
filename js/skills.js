$(document).ready(function() {

    // jQuery methods go here...
    // $(".chart_container").css("display", "none");
    $(".chart_container").hide();

    //green accent-4
    $(".section").click(function() {

        var rotation = $(this).css("transform");

        if (rotation == "matrix(1, 0, 0, 1, 0, 0)" || rotation == "none") {

            renderChart($(this));

            $(this).addClass('transform_one');
            $(this).removeClass('transform_two');

            $(this).find(".logo").css("display", "none");
            $(this).find(".chart_container").fadeIn(1000);

        } else {
            $(this).removeClass('transform_one');
            $(this).addClass('transform_two');


            $(this).find(".logo").fadeIn(1000);
            $(this).find(".chart_container").css("display", "none");
        }
    });

    // $(".section").hover(function() {
    //     $(this).css('opacity', '0.5');
    // });

    function renderChart(element) {
        element.find('.chart').easyPieChart({
            //your configuration goes here
            barColor: "#ef5350",
            trackColor: "#e0f7fa",
            scaleColor: false,
            lineCap: "square",
            lineWidth: 8,
            size: 140,
            animate: 2000,
            onStart: $.noop,
            onStop: $.noop,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });
    }

});