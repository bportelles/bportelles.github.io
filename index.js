$(document).ready(function () {
    $(".project").mouseenter(function () {
        $(this).animate({
            marginBottom: "20px", 
            marginTop: "20px", 
            padding: "10px",
        }, 300);
    });
    
    $(".project").mouseleave(function () {
        $(this).animate({
            marginBottom: "10px", 
            marginTop: "10px",
            padding: "0px",
        }, 300);
    });

    $("#aboutme").mouseenter(function () {
        $(this).animate({
            boxShadow: "5px 0px 15px rgba(0, 0, 0, 0.3)",
        }, 300);
    });
    
    $("#aboutme").mouseleave(function () {
        $(this).animate({
            boxShadow: "",
        }, 300);
    });

    $("#scrollToAboutMe").click(function () {
        $("html, body").animate({
            scrollTop: $("#aboutme").offset().top
        }, 300);
    });
    $("#scrollToProjects").click(function () {
        $("html, body").animate({
            scrollTop: $("#projects").offset().top
        }, 100);
    });
    $("#scrollToSkills").click(function () {
        $("html, body").animate({
            scrollTop: $("#skills").offset().top
        }, 100);
    });
    $("#scrollToWork").click(function () {
        $("html, body").animate({
            scrollTop: $("#experience").offset().top
        }, 100);
    });
    $("#scrollToDegree").click(function () {
        $("html, body").animate({
            scrollTop: $("#schooling").offset().top
        }, 100);
    });

    function repeatBlinkerFadeAnim() {
        $("#blinker").animate({opacity: 0}, 300, function () {
            $(this).animate({opacity: 1}, 1400, repeatBlinkerFadeAnim);
        });
    }

    repeatBlinkerFadeAnim();
});