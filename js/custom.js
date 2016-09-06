/**
 * Created by Daniel Sánchez on 05/09/2016.
 */

$('.panel-body').click(function (e) {
    if (e.target === this) {
        window.alert('Panel Body');
    }
});

$('.users').click(function (e) {
    if (e.target === this) {
        window.alert('Slack');
    }
});

$('.repo').click(function (e) {
    if (e.target === this) {
        window.alert('Bitbucket');
    }
});

$('.send').click(function (e) {
    if (e.target === this) {
        window.alert('Applivery');
    }
});

$('.delete').click(function (e) {
    if (e.target === this) {
        window.alert('Delete');
    }
});

function resizeBuildStatus() {
    $('div.main-panel').each(function (index, element) {

        //Get the build-status object
        var status_element = $(element).find('div.build-status')[0];

        //Reset the status_element height;
        $(status_element).height(0);

        //Get the panel height
        var panel_height = $($(element).find('div.panel-body')[0]).outerHeight();

        //Set the build-status height equals to the panel height
        $(status_element).height(panel_height);
        // console.log('resized');
    });
}

$(function () {
    // $(window).resize(function () {
    //     resizeBuildStatus();
    // });
    resizeBuildStatus();
});
$(window).resize(function () {
    resizeBuildStatus();
});