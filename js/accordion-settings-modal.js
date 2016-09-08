/**
 * Created by Daniel Sánchez on 08/09/2016.
 */

$(function () {
    // $('div#settings-tab fieldset span img').each(function(index,element){
    //     console.log(element);
    //     $(element).click(function(e){
    //         if(e.target === this){
    //             $('#settings-modal').modal('show');
    //         }
    //     });
    // });
});

$('#settings-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); //Modal trigger
    var modal = this;

    var id = $(button).attr('id');

    switch (id) {
        /* ----- Git ----- */
        case 'modal-toggle-bitbucket':
            $('#modal-title').html('Configuración de Bitbucket');
            break;
        case 'modal-toggle-github':
            $('#modal-title').html('Configuración de GitHub');
            break;
        case 'modal-toggle-gitlab':
            $('#modal-title').html('Configuración de GitLab');
            break;
        /* --------------- */

        /* ----- Communication ----- */
        case 'modal-toggle-slack':
            $('#modal-title').html('Configuración de Slack');
            $('#modal-form-slack').addClass('modal-form-active');
            $('#modal-form-slack').removeClass('modal-form-disabled');
            break;
        // case 'modal-toggle-jira':
        //     break;
        // case 'modal-toggle-trello':
        //     ('#modal-title').html('Configuración de Trello');
        //     $('#modal-form-trello').addClass('modal-form-active');
        //     $('#modal-form-trello').removeClass('modal-form-disabled');
        //     break;
        /* ------------------------- */

        /* ----- Distribution ----- */
        case 'modal-toggle-applivery':
            $('#modal-title').html('Configuración de Applivery');
            $('#modal-form-applivery').addClass('modal-form-active');
            $('#modal-form-applivery').removeClass('modal-form-disabled');
            break;
        case 'modal-toggle-crashlytics':
            $('#modal-title').html('Configuración de Crashlytics');
            $('#modal-form-crashlytics').addClass('modal-form-active');
            $('#modal-form-crashlytics').removeClass('modal-form-disabled');
            break;
        case 'modal-toggle-testfairy':
            $('#modal-title').html('Configuración de TestFairy');
            $('#modal-form-testfairy').addClass('modal-form-active');
            $('#modal-form-testfairy').removeClass('modal-form-disabled');
            break;
        // case 'modal-toggle-hockeyapp':
        //     break;
        case 'modal-toggle-mail':
            $('#modal-title').html('Configuración de Correo');
            $('#modal-form-mail').addClass('modal-form-active');
            $('#modal-form-mail').removeClass('modal-form-disabled');
            break;
        /* ------------------------- */

        /* ----- Test ----- */
        case 'modal-toggle-apptize':
            $('#modal-title').html('Configuración de Apptize');
            break;
        // case 'modal-toggle-aws-mobile':
        //     break;
        // case 'modal-toggle-appium':
        //     break;
        /* ---------------- */

        /* ----- Default and not implemented yet ----- */
        default:
            $('#modal-title').html('Próximamente');
            break;
        /* --------------------------------------------*/
    }
});

// Clear the modal on exit
$('#settings-modal').on('hide.bs.modal', function (event) {
    $('.modal-form-active').each(function (index, element) {
        $(element).removeClass('modal-form-active');
        $(element).addClass('modal-form-disabled');
    });
});