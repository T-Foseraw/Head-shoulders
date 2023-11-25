$(document).ready(function () {

    // button description, gellery

    $('#j_btn_description').click(function () {
        
        $('#j_description').slideToggle();

    });
    $('#j_btn_description1').click(function () {

        $('#j_description1').slideToggle();

    });
    $('#j_btn_description2').click(function () {

        $('#j_description2').slideToggle();

    });
    $('#j_btn_description3').click(function () {

        $('#j_description3').slideToggle();

    });
    $('#j_btn_description4').click(function () {

        $('#j_description4').slideToggle();

    });
    $('#j_btn_description5').click(function () {

        $('#j_description5').slideToggle();

    });

    // button show more, home

    $('#j_show_more').click(function () {

        $('#j_more').slideToggle(function () {

            $('#j_img_show').animate({
                opacity: 1
            }, 2000);
        });

    });

    // button about us

    $('#j_btn_history').click(function () {

        $('#j_btn_history').animate({
            marginLeft: '550px'
        })
        $('#j_btn_philosophy').animate({
            marginLeft: '15px'
        })
        $('#j_btn_safety').animate({
            marginLeft: '15px'
        })

        $('#j_safety').fadeOut("safety");
        $('#j_philosophy').fadeOut("philosophy");
        $('#j_history').fadeIn("history");
        
    });
    $('#j_btn_philosophy').click(function () {

        $('#j_btn_philosophy').animate({
            marginLeft: '550px'
        })
        $('#j_btn_safety').animate({
            marginLeft: '15px'
        })
        $('#j_btn_history').animate({
            marginLeft: '15px'
        })

        $('#j_safety').fadeOut("safety");
        $('#j_history').fadeOut("history");
        $('#j_philosophy').fadeIn("philosophy");

    });
    $('#j_btn_safety').click(function () {

        $('#j_btn_safety').animate({
            marginLeft: '550px'
        })
        $('#j_btn_philosophy').animate({
            marginLeft: '15px'
        })
        $('#j_btn_history').animate({
            marginLeft: '15px'
        })


        $('#j_philosophy').fadeOut("philosophy");
        $('#j_history').fadeOut("history");
        $('#j_safety').fadeIn("safety");

    });







});