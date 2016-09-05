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