$(document).ready(function() {
    $(".content").first().addClass("visible")
    $(window).on("scroll", function() {
        $(".content").each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.9) {
                $(this).addClass("visible");
            }
        });
    });
});