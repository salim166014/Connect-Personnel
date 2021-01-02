// menu Hide show toggle Start--------------
$(document).ready(function() {
    $("#dropdown_btn").click(function() {
        $("#form").toggle();
    });
    $(document).on("click", function(event) {
        var trigger = $("#dropdown_btn")[0];
        var dropdown = $("#form");
        if (dropdown !== event.target && !dropdown.has(event.target).length && trigger !== event.target) {
        $("#form").hide();
        }
    });
    });
// menu Hide show toggle End--------------


// menu Hide show toggle for search btn responsive Start--------------

$(document).ready(function() {
    $("#searchbtn i").click(function() {
        $("#search").toggle();
    });
    $(document).on("click", function(event) {
        var trigger = $("#searchbtn i")[0];
        var dropdown = $("#search");
        if (dropdown !== event.target && !dropdown.has(event.target).length && trigger !== event.target) {
        $("#search").hide();
        }
    });
    });

// menu Hide show toggle End--------------

// toggle menu/navbar script -----------------
$('.menubtn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menubtn i').toggleClass("active");
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin:30,
        responsiveCalss: true,
        
        responsive:{
            0:{
                items:1
            },
            831:{
                items:3
            }
        } 
    });
});