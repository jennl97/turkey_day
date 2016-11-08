/**
 * Created by JENN on 11/7/2016.
 */
$(document).ready(function(){
    "use strict";
    $('#corn').fadeIn(4000);
    $('#leaves').fadeIn(4000);
    $('#owls').fadeIn(4000);
    $('#pilgrims').fadeIn(4000);
    $('#pumpkin').fadeIn(4000);
    $('#turkey').fadeIn(4000);
    $('#turkey_day').fadeIn(4000);

    $('#turkey').click(function () {
        $("#turkey, #pilgrims").animate(
            {left:'+=1300px'}, 5000);
    });

    $('#owls').click(function () {
        $(this).effect('bounce', {times:7}, 8000);
    });
    
    $('#pilgrims').click(function () {
        $(this).effect('slide');
    });

    $('#pumpkin').draggable(function () {

    });
    $('#pumpkin').click(function () {
        $(this).fadeOut('slow');
    });

    $('#corn').click(function () {
        $(this).animate(
            {width: "200%", height:"200%", opacity: '0'}, 2000)
        });

    $('#leaves').click(function () {
        $(this).animate({top:'+=1100px'},5000);
    });

    $('#turkey_day').click(function () {
        $(this).animate({bottom:'+=1100px'},5000);
    });
});
