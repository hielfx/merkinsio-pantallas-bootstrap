/**
 * Created by Daniel Sánchez on 07/09/2016.
 */

$(document).ready(function () {
    $('a').tooltip({placement: 'top'});

    $("#build-tab-toggle").click(function () {
        $("#build-tab-collapse").slideToggle("slow");

        $('#build-tab-toggle').toggleClass(function () {
            if ($(this).is('.fa fa-chevron-down')) {
                return '.fa fa-chevron-up';
            } else {
                console.log('down');
                return '.fa fa-chevron-down';
            }
        })
    });

});