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
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
        }, 300);

    });
    
    $("#aboutme").mouseleave(function () {
        $(this).animate({
            boxShadow: "",
        }, 300);
    });

    $(window).scroll(function() {
        let scrollPosition = $(this).scrollTop();

        pageIndicator = $("#pagePositionIndicator");

        console.log($("#schoolingHeaderWithIcon").offset.top);

        let ABOUT_ME_POS = (0 <= scrollPosition) && (scrollPosition < $("#schoolingHeaderWithIcon").position().top);
        let CS_DEGREE_POS = ($("#schoolingHeaderWithIcon").position().top <= scrollPosition) && (scrollPosition < $("#projectsHeaderWithIcon").position().top);
        let PROJECT_POS = ($("#projectsHeaderWithIcon").position().top <= scrollPosition) && (scrollPosition < $("#experienceHeaderWithIcon").position().top);
        let WORK_EXPERIENCE_POS = ($("#experienceHeaderWithIcon").position().top <= scrollPosition) && (scrollPosition < $("#skillsHeaderWithIcon").position().top);
        let SKILLS_TECHNOLOGIES_POS = ($("#skillsHeaderWithIcon").position().top <= scrollPosition) && (scrollPosition < 2629);

        let aboutMeButton = $("#scrollToAboutMe");
        let degreeButton = $("#scrollToDegree");
        let projectsButton = $("#scrollToProjects");
        let workButton = $("#scrollToWork");
        let skillsButton = $("#scrollToSkills");

        // Originally had written this as a switch, did not think
        // this logic through for non awkard parameter, still works in every scenario

        switch (pageIndicator != -1) {
            case (ABOUT_ME_POS):
                console.log("ABOUT ME TRUE");
                console.log(aboutMeButton.position().top);
                pageIndicator.offset({top: (aboutMeButton.position().top + scrollPosition)});
                break;
            case (CS_DEGREE_POS):
                console.log("CS POS TRUE");
                pageIndicator.offset({top: (degreeButton.position().top + scrollPosition)});
                break;
            case (PROJECT_POS):
                console.log("PROJECT POS TRUE");
                pageIndicator.offset({top: (projectsButton.position().top + scrollPosition)});
                break;
            case (WORK_EXPERIENCE_POS):
                console.log("WORK POS TRUE");
                pageIndicator.offset({top: (workButton.position().top + scrollPosition)});
                break;
            case (SKILLS_TECHNOLOGIES_POS):
                console.log("SKILLS POS TRUE");
                pageIndicator.offset({top: (skillsButton.position().top + scrollPosition)});
                break;
        }
        //console.log(scrollPosition);
    });

    $("#scrollToAboutMe").click(function () {
        $("html, body").animate({
            scrollTop: ($("#aboutme").offset().top) - 100
        }, 300);
    });
    $("#scrollToProjects").click(function () {
        $("html, body").animate({
            scrollTop: ($("#projects").offset().top) - 100
        }, 300);
    });
    $("#scrollToSkills").click(function () {
        $("html, body").animate({
            scrollTop: ($("#skills").offset().top) - 100
        }, 300);
    });
    $("#scrollToWork").click(function () {
        $("html, body").animate({
            scrollTop: ($("#experience").offset().top) - 100
        }, 300);
    });
    $("#scrollToDegree").click(function () {
        $("html, body").animate({
            scrollTop: ($("#schooling").offset().top) - 100
        }, 300);
    });

    function repeatBlinkerFadeAnim() {
        $("#blinker").animate({opacity: 0}, 300, function () {
            $(this).animate({opacity: 1}, 1500, repeatBlinkerFadeAnim);
        });
    }

    repeatBlinkerFadeAnim();
});