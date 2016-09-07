/**
 * Created by Daniel Sánchez on 07/09/2016.
 */

$(document).ready(function () {
    $('a').tooltip({placement: 'top'});

    /* Click function to expand and collapse changing the arrow*/
    $("#build-tab-toggle").click(function () {
        $("#build-tab-collapse").slideToggle(400, resizeBuildStatus);

        $('#build-tab-toggle').toggleClass(function () {
            if ($(this).is('.fa fa-chevron-circle-down')) {
                return '.fa fa-chevron-circle-up';
            } else {
                console.log('down');
                return '.fa fa-chevron-circle-down';
            }
        });
    });
});