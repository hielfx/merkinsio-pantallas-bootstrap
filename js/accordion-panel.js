/**
 * Created by Daniel Sánchez on 07/09/2016.
 */

$(document).ready(function () {
    $('a').tooltip({placement: 'top'});

    /* Click function to expand and collapse changing the arrow*/
    $(".build-tab-toggle").click(function (e) {
        /* Get the target element*/
        var target = e.target;

        if (target === this) {

            /* Get the common div for the toggle and collapse accordion*/
            var parents = $($($(target).parent()[0]).parent()[0]).parent()[0];

            /* Get the collapse element*/
            var collapse = $(parents).find('.build-tab-collapse')[0];

            /* Trigger the expand/collapse*/
            $(collapse).slideToggle(400, resizeBuildStatus);

            $(target).toggleClass(function () {
                if ($(this).is('.fa fa-chevron-circle-down')) {
                    return '.fa fa-chevron-circle-up';
                } else {
                    console.log('down');
                    return '.fa fa-chevron-circle-down';
                }
            });
        }
    });
});