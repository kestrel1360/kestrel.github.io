$(document).ready(function() {
    $("nav ul li a").click(function(event) {
        event.preventDefault();
        var targetID = $(this).attr("href").substring(1);
        $("section").removeClass("active");
        $("#" + targetID).addClass("active");
    });
});