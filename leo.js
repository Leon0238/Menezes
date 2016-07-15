$(document).ready(function () {
    $(".port").click(function () {
        $(".portDrop").slideToggle();
    });

    $(".about, .saibaMais").click(function () {
        $(".aboutMe").fadeIn();
        $(".ResumeScreen, .ContactScreen").fadeOut(200);
        $("body").css("background-image", "url('images/aboutBg.png')")
    });

    $(".back, .home").click(function () {
        $(".aboutMe, .ResumeScreen, .ContactScreen").fadeOut(200);
        $("body").css("background-image", "url('images/city.jpg')")
    });

    $(".resume").click(function () {
        $(".ResumeScreen").fadeIn();
        $(".aboutMe, .ContactScreen").fadeOut(200);
        $("body").css("background-image", "url('images/bgResume.jpg')")
    });

    $(".contact").click(function () {
        $(".ContactScreen").fadeIn();
        $(".aboutMe, .ResumeScreen").fadeOut(200);
        $("body").css("background-image", "url('images/bgContact.jpg')")
    });

    $('#send').click(function () {
        if ($("#name").val() == "" || $("#email").val() == "" || $("#msg").val() == "") {            
            $("#send").prop('disabled', true);
            $('#name, #email, #msg').addClass('required');       
        }
    });

    $("#name, #email, #msg").keyup(function () {
        $("#send").prop('disabled', false);
    });
});